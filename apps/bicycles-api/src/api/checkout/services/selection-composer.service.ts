import { CheckoutOrderBodyComponent, ConfiguratorComponentCollection, ConfiguratorComponentOption, ConfiguratorOptions, ConfiguratorSelection } from "@factorial/models"
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
        const configuration = await this.configuratorOptions.provide(product)
        const componentCollection = new ConfiguratorComponentCollection(configuration.components)
        const selection = new ConfiguratorSelection()

        if (this.invalidSelectedComponents(configuration, components)) {
            throw new Error('Configuration error')
        }

        for (let orderComponent of components) {
            const componentId = orderComponent.id

            const component = await this.repository.getComponent(componentId)

            if (!component) {
                console.log('[CheckoutService] - Component not found')
                throw new Error('Component not found')
            }

            const selectedOption = componentCollection.getOptionFromId(orderComponent.option)

            if (!selectedOption || this.emptyStock(selectedOption)) {
                console.log('[CheckoutService] - Option not found or stock is empty')
                throw new Error('Option not found')
            }

            selection.set(component.name, selectedOption)
        }

        return selection
    }

    private invalidSelectedComponents(
        configuration: ConfiguratorOptions,
        components: CheckoutOrderBodyComponent[]
    ): boolean {
        if (configuration.components.length !== components.length) {
            console.log('[SelectionComposerService] - Invalid components number')
            return true
        }

        if(this.duplicatedComponents(configuration)) {
            console.log('[SelectionComposerService] - Duplicated component')
            return true
        }

        return false
    }

    private duplicatedComponents(configuration: ConfiguratorOptions): boolean {
        const componentIds = []

        for (let component of configuration.components) {
            if (componentIds.includes(component.id)) {
                return true
            }

            componentIds.push(component.id)
        }

        return false
    }

    private emptyStock(option: ConfiguratorComponentOption): boolean {
        return option.stock !== null && option.stock <= 0
    }
}