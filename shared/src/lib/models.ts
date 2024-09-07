export interface ConfiguratorComponentOption {
  id: number,
  name: string,
  price: number,
  stock: number | null
  incompatibleOptions: number[]
}

export interface ConfiguratorComponent {
  id: number,
  name: string,
  options: ConfiguratorComponentOption[] 
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

export interface ConfiguratorOptions {
  components: ConfiguratorComponentCollection
}

export interface ConfiguratorOptionsEndpointResponse {
  components: ConfiguratorComponent[]
}