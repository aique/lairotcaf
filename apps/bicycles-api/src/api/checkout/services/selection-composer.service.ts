import { CheckoutOrderBodyComponent, ConfiguratorComponentCollection, ConfiguratorSelection } from "@factorial/models"
import { ConfiguratorOptionsProviderService } from "../../configurator/services/configurator-options-provider.service"
import { OrderDatabaseRepository } from "../repository/order-database.repository"

export class SelectionComposerService {
    constructor(
        private configuratorOptions: ConfiguratorOptionsProviderService,
        private repository: OrderDatabaseRepository
    ) {}
    
    async composeSelection(
        product: string,
        components: CheckoutOrderBodyComponent[]
    ): Promise<ConfiguratorSelection> {
        const configuratorOptions = await this.configuratorOptions.provide(product)
        const componentCollection = new ConfiguratorComponentCollection(configuratorOptions.components)
        const selection = new ConfiguratorSelection()

        for (let orderComponent of components) {
            const component = await this.repository.getComponent(orderComponent.id)

            if (!component) {
                console.log('[CheckoutService] - Component not found')
                throw new Error('Component not found')
            }

            const selectedOption = componentCollection.getOptionFromId(orderComponent.option)

            if (!selectedOption) {
                console.log('[CheckoutService] - Option not found')
                throw new Error('Option not found')
            }

            selection.set(component.name, selectedOption)
        }

        return selection
    }
}