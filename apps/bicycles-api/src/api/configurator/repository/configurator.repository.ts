import { ConfiguratorOptions } from "@factorial/models";

export interface ConfiguratorRepository {
    getConfiguratorOptions(product: string): Promise<ConfiguratorOptions>
}