import { Request, Response } from "express";
import { ConfiguratorOptionsProviderService } from "../services/configurator-options-provider.service";

export class ConfiguratorController {
    constructor(private configuratorOptions: ConfiguratorOptionsProviderService) {}

    async actionGetConfiguratorOptions(req: Request, res: Response) {
        const product = String(req.query.product)
        const options = await this.configuratorOptions.provide(product)

        res.status(200).send(options)
    }
}