import { Express } from "express";
import { ConfiguratorController } from "../api/controllers/configurator.controller";
import { ConfiguratorOptionsProviderService } from "../api/configurator/services/configurator-options-provider.service";
import { ConfiguratorDatabaseRepository } from "../api/configurator/repository/configurator-database.repository";
import { DatabaseConnector } from "../api/storage/database";
import { ConfiguratorOptionsProvider } from "../api/configurator/providers/configurator-options.provider";
import { StoreProductsProvider } from "../api/store/providers/store-products.provider";
import { ProductDatabaseRepository } from "../api/store/repository/product-database.repository";
import { StoreController } from "../api/controllers/store.controller";
import { StoreProductsProviderService } from "../api/store/services/store-products-provider.service";
import { CheckoutController } from "../api/controllers/checkout.controller";
import { OrderCreatorService } from "../api/checkout/services/order-creator.service";
import { OrderDatabaseRepository } from "../api/checkout/repository/order-database.repository";
import { CheckoutValidator } from "../api/checkout/checkout.validator";
import { SelectionComposerService } from "../api/checkout/services/selection-composer.service";

export default function configureRouter(app: Express) {
  const productsProvider = new StoreProductsProvider(
    new ProductDatabaseRepository(
      new DatabaseConnector()
    )
  )

  const productController = new StoreController(
    new StoreProductsProviderService(
      productsProvider
    )
  )

  app.route('/api/store/products')
    .get(productController.actionGetStoreProducts.bind(productController))

  const configuratorRepository = new ConfiguratorDatabaseRepository(
    new DatabaseConnector()
  )

  const optionsProvider = new ConfiguratorOptionsProvider(
    configuratorRepository  
  )

  const configuratorController = new ConfiguratorController(
    new ConfiguratorOptionsProviderService(
      optionsProvider
    )
  )

  app.route('/api/configurator/options')
      .get(configuratorController.actionGetConfiguratorOptions.bind(configuratorController))

  const orderRepository = new OrderDatabaseRepository(
    new DatabaseConnector()
  )

  const checkoutController = new CheckoutController(
    new OrderCreatorService(
      new CheckoutValidator(),
      orderRepository,
      new SelectionComposerService(
        new ConfiguratorOptionsProviderService(
          new ConfiguratorOptionsProvider(
            configuratorRepository
          )
        ),
        orderRepository
      )
    )
  )

  app.route('/api/order/checkout')
      .post(checkoutController.actionStoreOrder.bind(checkoutController))
}