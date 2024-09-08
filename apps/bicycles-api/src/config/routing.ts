import { Express } from "express";
import { ConfiguratorController } from "../api/controllers/configurator.controller";
import { ConfiguratorOptionsService } from "../api/configurator/configurator-options.service";
import { ConfiguratorDatabaseRepository } from "../api/configurator/repository/configurator-database.repository";
import { DatabaseConnector } from "../api/storage/database";
import { ConfiguratorOptionsProvider } from "../api/configurator/providers/configurator-options.provider";
import { StoreProductsProvider } from "../api/store/providers/store-products.provider";
import { ProductDatabaseRepository } from "../api/store/repository/product-database.repository";
import { StoreController } from "../api/controllers/store.controller";
import { StoreProductsService } from "../api/store/store-products.service";

export default function configureRouter(app: Express) {
  const productsProvider = new StoreProductsProvider(
    new ProductDatabaseRepository(
      new DatabaseConnector()
    )
  )

  const productController = new StoreController(
    new StoreProductsService(
      productsProvider
    )
  )

  app.route('/api/store/products')
    .get(productController.actionGetStoreProducts.bind(productController))

  const optionsProvider = new ConfiguratorOptionsProvider(
    new ConfiguratorDatabaseRepository(
      new DatabaseConnector()
    )
  )

  const configuratorController = new ConfiguratorController(
    new ConfiguratorOptionsService(
      optionsProvider
    )
  )

  app.route('/api/configurator/options')
      .get(configuratorController.actionGetConfiguratorOptions.bind(configuratorController))
}