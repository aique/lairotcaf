import { OrderDatabaseRepository } from "./repository/order-database.repository";
import { CheckoutValidator } from "./checkout.validator";
import { Response } from "express";

export class CheckoutService {
    constructor(
        private validator: CheckoutValidator,
        private repository: OrderDatabaseRepository
    ) {}

    async storeOrder(body: any, response: Response): Promise<Response> {
        const error = this.validator.validate(body)

        if (error) {
            response
                .status(400)
                .send({ errors: [error] })

            return response
        }

        // await this.repository.storeOrder(body)

        response.status(204).send()

        return response
    }
}