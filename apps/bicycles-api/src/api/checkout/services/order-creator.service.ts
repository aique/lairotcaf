import { OrderDatabaseRepository } from "../repository/order-database.repository";
import { CheckoutValidator } from "../checkout.validator";
import { CheckoutOrderBody, ConfiguratorSelection } from "@factorial/models";
import { SelectionComposerService } from "./selection-composer.service";

export class OrderCreatorService {
    private readonly INVALID_SELECTION_MESSAGE = 'Invalid selection'

    constructor(
        private validator: CheckoutValidator,
        private repository: OrderDatabaseRepository,
        private selectionComposer: SelectionComposerService
    ) {}

    async createOrder(body: CheckoutOrderBody): Promise<string> {
        const error = this.validator.validate(body)

        if (error) {
            return error
        }

        let selection: ConfiguratorSelection

        try {
            selection = await this.selectionComposer.composeSelection(
                body.order.product,
                body.order.components
            )
        } catch (err) {
            console.log('[OrderCreatorService] - Selection composing error')
            return this.INVALID_SELECTION_MESSAGE
        }

        if (selection.getIncompatibleOptionsError()) {
            console.log('[OrderCreatorService] - Incompatible selection error')

            return this.INVALID_SELECTION_MESSAGE
        }

        const success = await this.repository.storeOrder(
            body, selection
        )

        if (!success) {
            console.log('[OrderCreatorService] - Storing order error')
            return this.INVALID_SELECTION_MESSAGE
        }

        return ''
    }
}