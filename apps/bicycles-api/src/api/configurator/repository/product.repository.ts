import { ConfiguratorOptions } from "@factorial/models";

export interface ProductRepository {
    getConfiguratorOptions(): Promise<ConfiguratorOptions>
}