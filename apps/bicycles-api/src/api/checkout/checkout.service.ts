import { CheckoutOrderBody } from "@factorial/models";
import { OrderDatabaseRepository } from "./repository/order-database.repository";

export class CheckoutService {
    constructor(private repository: OrderDatabaseRepository) {}

    async storeOrder(order: CheckoutOrderBody): Promise<boolean> {
        // validar la orden
        // almacenar la orden

        await this.repository.storeOrder(order)

        return true
    }
}