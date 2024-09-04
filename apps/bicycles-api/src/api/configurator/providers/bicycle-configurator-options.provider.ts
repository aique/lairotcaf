import { ProductRepository } from "../repository/product.repository";
import { ConfiguratorOptionsBaseProvider } from "./configurator-options-base.provider";

export class BicycleConfiguratorOptionsProvider extends ConfiguratorOptionsBaseProvider {
    constructor(repository: ProductRepository) {
        super(repository)
    }
}