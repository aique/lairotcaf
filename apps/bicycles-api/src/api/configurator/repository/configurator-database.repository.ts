import { ConfiguratorComponent, ConfiguratorComponentOption, ConfiguratorOptionPriceCombination, ConfiguratorOptions } from "@factorial/models";
import { DatabaseConnector } from "../../storage/database";
import { ConfiguratorRepository } from "./configurator.repository";

export class ConfiguratorDatabaseRepository implements ConfiguratorRepository {
    constructor(private db: DatabaseConnector) {}

    async getConfiguratorOptions(product: string): Promise<ConfiguratorOptions> {
        const db = await this.db.openConnection()

        const components: ConfiguratorComponent[] = await db.all(`
            SELECT component.id, component.name
            FROM component
            JOIN product ON component.product_id = product.id
            WHERE product.slug = "${product}"
        `)

        console.log('compo', components)

        for (let component of components) {
            component.options = await this.getComponentOptions(component)
        }

        return { components: components }
    }

    private async getComponentOptions(component: ConfiguratorComponent): Promise<ConfiguratorComponentOption[]> {
        const db = await this.db.openConnection()

        const optionRows = await db.all(`
            SELECT id, name, price, stock, incompatible_options
            FROM component_option
            WHERE component_id = ${component.id}
        `)

        const options = []

        for (let option of optionRows) {
            const priceCombinations = await this.getPriceCombinations(option.id)

            options.push({
                id: option.id,
                component: {
                    id: component.id,
                    name: component.name
                },
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
            SELECT combinations, price
            FROM option_combination
            WHERE option_id = ${optionId}
            LIMIT 1
        `)

        return priceCombinations.map((priceCombination) => {
            return {
                options: JSON.parse(priceCombination.combinations),
                price: priceCombination.price
            }
        })
    }
}