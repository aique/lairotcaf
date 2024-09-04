export interface ConfiguratorComponentOptions {
  id: number,
  name: string,
  price: number
}

export interface ConfiguratorComponent {
  id: number,
  name: string,
  options: ConfiguratorComponentOptions[] 
}

export interface ConfiguratorOptions {
  components: ConfiguratorComponent[]
}