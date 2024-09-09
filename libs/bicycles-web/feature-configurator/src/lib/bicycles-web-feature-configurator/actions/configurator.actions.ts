import { CheckoutOrderProduct, ConfiguratorOptions } from '@factorial/models';
import { createAction, props } from '@ngrx/store';

const loadConfiguratorOptions = createAction(
  '[Configurator] Load Configurator Options',
  props<{ product: string }>()
);

const loadConfiguratorOptionsSuccess = createAction(
  '[Configurator] Load Configurator Options Success',
  props<ConfiguratorOptions>()
);

const loadConfiguratorOptionsFailed = createAction(
  '[Configurator] Load Configurator Options Failed'
);

const configurationCheckout = createAction(
  '[Configurator] Configurator Checkout',
  props<CheckoutOrderProduct>()
);

export const ConfiguratorActions = {
    loadConfiguratorOptions,
    loadConfiguratorOptionsSuccess,
    loadConfiguratorOptionsFailed,
    configurationCheckout
};
