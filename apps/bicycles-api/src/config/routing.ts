import { Express } from "express";
import { ConfiguratorController } from "../api/controllers/configurator.controller";
import { ConfiguratorOptionsService } from "../api/configurator/configurator-options.service";
import { DatabaseRepository } from "../api/configurator/repository/database.repository";
import { DatabaseConnector } from "../api/storage/database";
import { ConfiguratorOptionsProvider } from "../api/configurator/providers/configurator-options.provider";

export default function configureRouter(app: Express) {
    const optionsProvider = new ConfiguratorOptionsProvider(
      new DatabaseRepository(
        new DatabaseConnector()
      )
    )

    const configuratorController = new ConfiguratorController(
      new ConfiguratorOptionsService(
        optionsProvider
      )
    )

    app.route('/configurator/options')
      .get(configuratorController.actionGetConfiguratorOptions.bind(configuratorController))
}