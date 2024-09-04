import { ConfiguratorOptionsProvider } from "./configurator-options.provider";

export class ProductConfiguratorProvider {
    constructor(private providers: { product: string, provider: ConfiguratorOptionsProvider }[]) {}

    getProvider(product: string): ConfiguratorOptionsProvider {
        const provider = this.providers
            .filter((current) => current.product === product) // filters the provider by product name
            .map((match) => match.provider) // gets the provider object

        if (!provider) {
            return null
        }

        return provider[0] // gets the first and unique provider filtered
    }
}