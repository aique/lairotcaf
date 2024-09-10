import { StoreProducts } from "@factorial/models";
import { StoreProductsProvider } from "../providers/store-products.provider";

export class StoreProductsProviderService {
    constructor(private provider: StoreProductsProvider) {}

    async getProducts(): Promise<StoreProducts> {
        if (this.provider) {
            return this.provider.getProducts()
        }

        return {
            products: []
        }
    }
}