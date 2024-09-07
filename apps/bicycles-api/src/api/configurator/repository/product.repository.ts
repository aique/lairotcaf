import { ConfiguratorOptions } from "@factorial/models";

export interface ProductRepository {
    getConfiguratorOptions(product: string): Promise<ConfiguratorOptions>
}