import { ConfiguratorOptions } from "@factorial/models";
import { ProductConfiguratorProvider } from "./providers/product-configurator.provider";

export class ConfiguratorOptionsService {
    constructor(private productConfigurationProvider: ProductConfiguratorProvider) {}

    async provide(product: string): Promise<ConfiguratorOptions> {
        const provider = this.productConfigurationProvider.getProvider(product)

        if (provider) {
            return provider.getOptions()
        }

        return null
    }
}