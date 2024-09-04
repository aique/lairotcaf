import { ConfiguratorOptions } from "@factorial/models";

export interface ConfiguratorOptionsProvider {
    getOptions(): Promise<ConfiguratorOptions>
}