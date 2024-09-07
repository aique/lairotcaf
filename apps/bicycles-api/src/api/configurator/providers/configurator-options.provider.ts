import { ConfiguratorOptionsEndpointResponse } from "@factorial/models";

export interface ConfiguratorOptionsProvider {
    getOptions(): Promise<ConfiguratorOptionsEndpointResponse>
}