import { Express } from "express";
import { ConfiguratorController } from "../api/controllers/configurator.controller";

export default function configureRouter(app: Express) {
    const configuratorController = new ConfiguratorController();

    app.route('/configurator/options')
      .get(configuratorController.actionGetConfiguratorOptions.bind(configuratorController));
}