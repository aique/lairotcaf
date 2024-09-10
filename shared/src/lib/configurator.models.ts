import { CheckoutOrderProduct, CheckoutOrderProductComponent } from "./checkout.models"

export interface ComponentOptionsResumeItem {
  name: string,
  option: string,
  price: number
}

export interface ComponentOptionsResume {
  components: ComponentOptionsResumeItem[]
}

export interface ConfiguratorOptionPriceCombination {
  options: number[],
  price: number
}

export interface ConfiguratorComponentOption {
  id: number,
  component: {
    id: number,
    name: string
  },
  name: string,
  price: number | null,
  stock: number | null
  incompatibleOptions: number[]
  priceCombinations: ConfiguratorOptionPriceCombination[]
}

export interface ConfiguratorComponent {
  id: number,
  name: string,
  options: ConfiguratorComponentOption[] 
}

export interface ConfiguratorOptions {
  components: ConfiguratorComponent[]
}

export class ConfiguratorComponentCollection {
  components: ConfiguratorComponent[] = []

  constructor (components: ConfiguratorComponent[]) {
    this.components = components
  }

  getComponents(): ConfiguratorComponent[] {
    return this.components
  }

  length(): number {
    return this.components.length
  }

  getOptionFromId(optionId: number): ConfiguratorComponentOption | null {
    for (let component of this.components) {
      for (let option of component.options) {
        if (option.id === optionId) {
          return option
        }
      }
    }

    return null
  }
}

export class ConfiguratorSelection {
  private selectedOptions: Map<string, ConfiguratorComponentOption>

  constructor() {
    this.selectedOptions = new Map()
  }

  get(key: string): ConfiguratorComponentOption | undefined {
    return this.selectedOptions.get(key)
  }

  set(key: string, selectedOption: ConfiguratorComponentOption): void {
    this.selectedOptions.set(key, selectedOption)
  }

  delete(key: string): void {
    this.selectedOptions.delete(key)
  }

  keys(): IterableIterator<string> {
    return this.selectedOptions.keys()
  }

  getSelectedOptionIds(): number[] {
    const selectedOptionIds: number[] = []

    for (let selectedOption of this.selectedOptions.values()) {
      selectedOptionIds.push(selectedOption.id)
    }

    return selectedOptionIds
  }

  getIncompatibleOptionsError(): string {
    for (let selectedOption of this.selectedOptions.values()) {
      const error = this.getIncompatibleOptions(selectedOption)

      if (error) {
        return error
      }
    }

    return ''
  }

  private getIncompatibleOptions(option: ConfiguratorComponentOption): string {
    if (!option.incompatibleOptions) {
      return ''
    }

    for (let selectedOption of this.selectedOptions.values()) {
      if (option.id === selectedOption.id) {
        continue
      }

      if (option.incompatibleOptions.includes(selectedOption.id)) {
        return `${option.name} is incompatible with ${selectedOption.name}, please, change your selection`
      }
    }

    return ''
  }

  getPrice(): number {
    let price = 0

    for (let selectedOption of this.selectedOptions.values()) {
      price += this.getOptionPrice(selectedOption)
    }

    return price
  }

  getOptionPrice(option: ConfiguratorComponentOption): number {
    if (option.price) {
        return option.price
    }

    if (option.priceCombinations.length > 0) {
      return this.getPriceFromProductCombinations(option.priceCombinations)
    }

    return 0
  }

  private getPriceFromProductCombinations(priceCombinations: ConfiguratorOptionPriceCombination[]): number {
    const selectedOptionIds = this.getSelectedOptionIds()

    for (let priceCombination of priceCombinations) {
      const price = this.getProductCombinationPrice(selectedOptionIds, priceCombination)

      if (price > 0) {
        return price
      }
    }

    return 0
  }

  private getProductCombinationPrice(
    selectedOptionIds: number[],
    priceCombination: ConfiguratorOptionPriceCombination
  ): number {
    for (let option of priceCombination.options) {
      if (!selectedOptionIds.includes(option)) {
        return 0
      }
    }

    return priceCombination.price
  }

  getResume(): ComponentOptionsResumeItem[] {
    const resume: ComponentOptionsResumeItem[] = []

    for (let component of this.selectedOptions.keys()) {
      const selectedOption = this.selectedOptions.get(component)

      if (!selectedOption) {
        continue
      }
      
      resume.push({
        name: component,
        option: selectedOption.name,
        price: this.getOptionPrice(selectedOption)
      })
    }

    return resume
  }

  getOrder(product: string): CheckoutOrderProduct {
    const components: CheckoutOrderProductComponent[] = []

    for (let selectedOption of this.selectedOptions.values()) {
      components.push({
        id: selectedOption.component.id,
        name: selectedOption.component.name,
        option: {
          id: selectedOption.id,
          name: selectedOption.name,
          price: this.getOptionPrice(selectedOption)
        }
      })
    }

    return {
      product,
      price: this.getPrice(),
      components
    }
  }
}