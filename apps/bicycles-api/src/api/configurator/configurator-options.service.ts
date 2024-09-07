import { ConfiguratorOptions } from "@factorial/models";
import { ConfiguratorOptionsProvider } from "./providers/configurator-options.provider";

export class ConfiguratorOptionsService {
    constructor(private provider: ConfiguratorOptionsProvider) {}

    async provide(product: string): Promise<ConfiguratorOptions> {
        if (this.provider) {
            return this.provider.getOptions(product)
        }

        return {
            components: []
        }
    }
}