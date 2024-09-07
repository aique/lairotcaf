import { ConfiguratorOptions } from "@factorial/models";
import { ProductRepository } from "../repository/product.repository";

export class ConfiguratorOptionsProvider {
    constructor(protected repository: ProductRepository) {}

    async getOptions(product: string): Promise<ConfiguratorOptions> {
        return await this.repository.getConfiguratorOptions(product)
    }
}