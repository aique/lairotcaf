import { Request, Response } from "express";
import { CheckoutService } from "../checkout/checkout.service"

export class CheckoutController {
    constructor(private checkout: CheckoutService) {}

    async actionStoreOrder(req: Request, res: Response): Promise<Response> {
        return await this.checkout.storeOrder(
            req.body, res
        )
    }
}