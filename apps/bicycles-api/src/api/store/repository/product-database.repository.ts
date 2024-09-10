import { StoreProduct, StoreProducts } from "@factorial/models";
import { DatabaseConnector } from "../../../storage/database";
import { ProductRepository } from "./product.repository";

export class ProductDatabaseRepository implements ProductRepository {
    constructor(private db: DatabaseConnector) {}

    async getProducts(): Promise<StoreProducts> {
        const db = await this.db.openConnection()

        const products: StoreProduct[] = await db.all(`
            SELECT id, name, slug
            FROM product
        `)

        return { products }
    }
}