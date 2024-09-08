import { StoreProducts } from "@factorial/models";
import { ProductRepository } from "../repository/product.repository";

export class StoreProductsProvider {
    constructor(protected repository: ProductRepository) {}

    async getProducts(): Promise<StoreProducts> {
        return await this.repository.getProducts()
    }
}
