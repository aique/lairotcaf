export interface ConfiguratorOptionPriceCombination {
  options: number[],
  price: number
}

export interface ConfiguratorComponentOption {
  id: number,
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

  set(key: string, selectedOption: ConfiguratorComponentOption): void {
    this.selectedOptions.set(key, selectedOption)
  }

  delete(key: string): void {
    this.selectedOptions.delete(key)
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
      if (selectedOption.price) {
        price += selectedOption.price
      }

      if (selectedOption.priceCombinations.length > 0) {
        price += this.getPriceFromProductCombinations(selectedOption.priceCombinations)
      }
    }

    return price
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
}