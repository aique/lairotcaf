import { Request, Response } from "express";
import { CheckoutService } from "../checkout/checkout.service"

export class CheckoutController {
    constructor(private checkout: CheckoutService) {}

    async actionStoreOrder(req: Request, res: Response) {
        const success = await this.checkout.storeOrder(
            req.body
        )

        if (success) {
            res.status(204).send()
        }

        res.status(400).send()
    }
}