import { Express } from "express";
import { ConfiguratorController } from "../api/controllers/configurator.controller";
import { ConfiguratorOptionsService } from "../api/configurator/configurator-options.service";

export default function configureRouter(app: Express) {
    const configuratorController = new ConfiguratorController(
      new ConfiguratorOptionsService()
    );

    app.route('/configurator/options')
      .get(configuratorController.actionGetConfiguratorOptions.bind(configuratorController));
}