import { ConfiguratorComponent, ConfiguratorComponentOptions, ConfiguratorOptions } from "@factorial/models";
import { DatabaseConnector } from "../../storage/database";
import { ProductRepository } from "./product.repository";

export class BicycleRepository implements ProductRepository {
    constructor(private db: DatabaseConnector) {}

    async getConfiguratorOptions(): Promise<ConfiguratorOptions> {
        const db = await this.db.openConnection()

        const components: ConfiguratorComponent[] = await db.all(`
            SELECT id, name FROM component
        `)

        for (let component of components) {
            component.options = await this.getComponentOptions(component.id)
        }

        return { components }
    }

    private async getComponentOptions(componentId: number): Promise<ConfiguratorComponentOptions[]> {
        const db = await this.db.openConnection()

        return await db.all(`
            SELECT id, name, price, stock FROM component_option WHERE component_id = ${componentId}
        `)
    }
}