import { ConfiguratorComponent, ConfiguratorComponentCollection, ConfiguratorComponentOption, ConfiguratorOptions, ConfiguratorOptionsEndpointResponse } from "@factorial/models";
import { DatabaseConnector } from "../../storage/database";
import { ProductRepository } from "./product.repository";

export class BicycleRepository implements ProductRepository {
    constructor(private db: DatabaseConnector) {}

    async getConfiguratorOptions(): Promise<ConfiguratorOptionsEndpointResponse> {
        const db = await this.db.openConnection()

        const components: ConfiguratorComponent[] = await db.all(`
            SELECT id, name
            FROM component
        `)

        for (let component of components) {
            component.options = await this.getComponentOptions(component.id)
            console.log(component.options)
        }

        return { components: components }
    }

    private async getComponentOptions(componentId: number): Promise<ConfiguratorComponentOption[]> {
        const db = await this.db.openConnection()

        const components = await db.all(`
            SELECT id, name, price, stock, incompatible_options
            FROM component_option
            WHERE component_id = ${componentId}
        `)

        return components.map((component) => {
            return {
                id: component.id,
                name: component.name,
                price: component.price,
                stock: component.stock,
                incompatibleOptions: JSON.parse(component.incompatible_options)
            }
        })
    }
}