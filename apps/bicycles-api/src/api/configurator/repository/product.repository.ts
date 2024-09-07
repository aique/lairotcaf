import { ConfiguratorOptions, ConfiguratorOptionsEndpointResponse } from "@factorial/models";

export interface ProductRepository {
    getConfiguratorOptions(): Promise<ConfiguratorOptionsEndpointResponse>
}