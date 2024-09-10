import { Request, Response } from "express";
import { OrderCreatorService } from "../services/order-creator.service"

export class CheckoutController {
    constructor(private checkout: OrderCreatorService) {}

    async actionStoreOrder(req: Request, res: Response): Promise<Response> {
        const error = await this.checkout.createOrder(req.body)

        if (error) {
            return res
                .status(400)
                .send({ errors: [error] })
        }

        return res.status(204).send()
    }
}