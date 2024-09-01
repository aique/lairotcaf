import { createAction, props } from '@ngrx/store';

const loadConfiguratorOptions = createAction(
  '[Configurator] Load Configurator Options',
  props<{ product: string }>()
);

const loadConfiguratorOptionsSuccess = createAction(
  '[Configurator] Load Configurator Options Success',
  props<{ product: string }>()
);

export const ConfiguratorActions = {
    loadConfiguratorOptions,
    loadConfiguratorOptionsSuccess
};
