import { Request, Response } from "express";
import { StoreProductsProviderService } from "../services/store-products-provider.service";

export class StoreController {
    constructor(private storeProducts: StoreProductsProviderService) {}

    async actionGetStoreProducts(req: Request, res: Response) {
        const products = await this.storeProducts.getProducts()

        res.status(200).send(products)
    }
}