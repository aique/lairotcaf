import { CheckoutComponent, CheckoutOrderBody, ConfiguratorSelection } from "@factorial/models";
import { DatabaseConnector } from "../../storage/database";
import { Database } from "sqlite";

export class OrderDatabaseRepository {
    constructor(private db: DatabaseConnector) {}

    async storeOrder(
        checkout: CheckoutOrderBody,
        selection: ConfiguratorSelection
    ): Promise<boolean> {
        const db = await this.db.openConnection()

        const orderId = await this.storeOrderData(
            db, checkout, selection
        )

        if (!orderId) {
            return false
        }

        return this.storeOrderComponentsData(
            db, orderId, selection
        )
    }

    private async storeOrderComponentsData(
        db: Database,
        orderId: number,
        selection: ConfiguratorSelection
    ): Promise<boolean> {
        for (let component of selection.keys()) {
            const option = selection.get(component)

            if (!option) {
                continue
            }

            await db.exec(`
                INSERT into "order_component" (order_id, component, option, price) VALUES (
                    ${orderId},
                    "${component}",
                    "${option.name}",
                    ${selection.getOptionPrice(option)}
                )
            `)
        }

        return true
    }

    private async storeOrderData(
        db: Database,
        checkout: CheckoutOrderBody,
        selection: ConfiguratorSelection
    ): Promise<number | null> {
        const productName = await this.getProductName(db, checkout.order.product)

        if (!productName) {
            console.log(`[OrderDatabaseRepository] - Invalid product slug: ${checkout.order.product}`)
            return null
        }

        await db.exec(`
            INSERT into "order" (name, surname, email, phone, product, price) VALUES (
                "${checkout.userData.name}",
                "${checkout.userData.surname}",
                "${checkout.userData.email}",
                "${checkout.userData.phone}",
                "${productName}",
                ${selection.getPrice()}
            )
        `)

        const order = await db.get(`SELECT last_insert_rowid() AS id`)

        if (!order) {
            return null
        }

        return order.id
    }

    private async getProductName(db: Database, slug: string): Promise<string | null> {
        const product = await db.get(`
            SELECT name FROM product WHERE slug = "${slug}" LIMIT 1
        `)

        return product ? product.name : null;
    }

    async getComponent(id: number): Promise<CheckoutComponent> {
        const db = await this.db.openConnection()

        return db.get(`
            SELECT id, name
            FROM component
            WHERE id = ${id}
            LIMIT 1
        `)
    }
}