import { Request, Response } from "express";
import { StoreProductsService } from "../store/store-products.service";

export class StoreController {
    constructor(private storeProducts: StoreProductsService) {}

    async actionGetStoreProducts(req: Request, res: Response) {
        const products = await this.storeProducts.getProducts()

        res.status(200).send(products)
    }
}