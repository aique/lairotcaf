import { ConfiguratorComponent, ConfiguratorComponentOption, ConfiguratorOptionPriceCombination, ConfiguratorOptions } from "@factorial/models";
import { DatabaseConnector } from "../../storage/database";
import { ProductRepository } from "./product.repository";

export class DatabaseRepository implements ProductRepository {
    constructor(private db: DatabaseConnector) {}

    async getConfiguratorOptions(product: string): Promise<ConfiguratorOptions> {
        const db = await this.db.openConnection()

        const components: ConfiguratorComponent[] = await db.all(`
            SELECT component.id, component.name
            FROM component
            JOIN product ON component.product = product.id
            WHERE product.name = "${product}"
        `)

        for (let component of components) {
            component.options = await this.getComponentOptions(component.id)
        }

        return { components: components }
    }

    private async getComponentOptions(componentId: number): Promise<ConfiguratorComponentOption[]> {
        const db = await this.db.openConnection()

        const optionRows = await db.all(`
            SELECT id, name, price, stock, incompatible_options
            FROM component_option
            WHERE component_id = ${componentId}
        `)

        const options = []

        for (let option of optionRows) {
            const priceCombinations = await this.getPriceCombinations(option.id)

            options.push({
                id: option.id,
                name: option.name,
                price: option.price,
                stock: option.stock,
                incompatibleOptions: JSON.parse(option.incompatible_options),
                priceCombinations
            })
        }

        return options
    }

    private async getPriceCombinations(optionId: number): Promise<ConfiguratorOptionPriceCombination[]> {
        const db = await this.db.openConnection()

        const priceCombinations = await db.all(`
            SELECT option_2, price
            FROM option_combination
            WHERE option_1 = ${optionId}
        `)

        return priceCombinations.map((priceCombination) => {
            return {
                option: priceCombination.option_2,
                price: priceCombination.price
            }
        })
    }
}