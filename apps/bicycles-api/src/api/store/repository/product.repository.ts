import { StoreProducts } from "@factorial/models";

export interface ProductRepository {
    getProducts(): Promise<StoreProducts>
}