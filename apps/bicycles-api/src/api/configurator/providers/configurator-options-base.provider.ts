import { ConfiguratorOptions } from "@factorial/models";
import { ProductRepository } from "../repository/product.repository";
import { ConfiguratorOptionsProvider } from "./configurator-options.provider";

export class ConfiguratorOptionsBaseProvider implements ConfiguratorOptionsProvider {
    constructor(protected repository: ProductRepository) {}

    async getOptions(): Promise<ConfiguratorOptions> {
        return await this.repository.getConfiguratorOptions()
    }
}