import { Request, Response } from "express";
import { ConfiguratorOptionsService } from "../configurator/configurator-options.service";

export class ConfiguratorController {
    constructor(private configuratorOptions: ConfiguratorOptionsService) {}

    async actionGetConfiguratorOptions(req: Request, res: Response) {
        const product = String(req.query.product)
        const options = await this.configuratorOptions.provide(product)

        res.status(200).send(options)
    }
}