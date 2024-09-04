import { Express } from "express";
import { ConfiguratorController } from "../api/controllers/configurator.controller";
import { ConfiguratorOptionsService } from "../api/configurator/configurator-options.service";
import { ProductConfiguratorProvider } from "../api/configurator/providers/product-configurator.provider";
import { BicycleConfiguratorOptionsProvider } from "../api/configurator/providers/bicycle-configurator-options.provider";
import { BicycleRepository } from "../api/configurator/repository/bicycle.repository";
import { DatabaseConnector } from "../api/storage/database";

export default function configureRouter(app: Express) {
    const bicycleProvider = new BicycleConfiguratorOptionsProvider(
      new BicycleRepository(
        new DatabaseConnector()
      )
    )

    const configuratorController = new ConfiguratorController(
      new ConfiguratorOptionsService(
        new ProductConfiguratorProvider([{
          product: 'bicycle',
          provider: bicycleProvider
        }])
      )
    );

    app.route('/configurator/options')
      .get(configuratorController.actionGetConfiguratorOptions.bind(configuratorController));
}