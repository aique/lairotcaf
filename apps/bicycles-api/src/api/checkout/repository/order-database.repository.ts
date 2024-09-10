import { CheckoutOrderBody } from "@factorial/models";
import { DatabaseConnector } from "../../storage/database";

export class OrderDatabaseRepository {
    constructor(private db: DatabaseConnector) {}

    async storeOrder(order: CheckoutOrderBody): Promise<void> {
        const db = await this.db.openConnection()

        await db.exec(`
            INSERT into "order" (name, surname, email, phone, product, price) VALUES (
                "${order.userData.name}",
                "${order.userData.surname}",
                "${order.userData.email}",
                "${order.userData.phone}",
                (SELECT name FROM product WHERE slug = "${order.order.product}" LIMIT 1),
                999
            )
        `)
    }
}