interface ConfiguratorComponentOptions {
  name: string,
  price: number
}

interface ConfiguratorComponent {
  name: string,
  options: ConfiguratorComponentOptions[] 
}

export interface ConfiguratorOptions {
  components: ConfiguratorComponent[]
}