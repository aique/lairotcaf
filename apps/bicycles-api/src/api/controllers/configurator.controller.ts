import { Request, Response } from "express";
import { ConfiguratorOptionsService } from "../configurator/configurator-options.service";

export class ConfiguratorController {
    constructor(private configuratorOptions: ConfiguratorOptionsService) {

    }

    async actionGetConfiguratorOptions(req: Request, res: Response) {
        const product = String(req.query.product)

        res.status(200).send(this.configuratorOptions.provide(product))
    }
}