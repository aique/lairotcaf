import { ConfiguratorOptions } from "@factorial/models";
import { ConfiguratorRepository } from "../repository/configurator.repository";

export class ConfiguratorOptionsProvider {
    constructor(protected repository: ConfiguratorRepository) {}

    async getOptions(product: string): Promise<ConfiguratorOptions> {
        return await this.repository.getConfiguratorOptions(product)
    }
}