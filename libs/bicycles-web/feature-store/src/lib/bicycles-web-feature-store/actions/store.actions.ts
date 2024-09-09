import { StoreProducts } from '@factorial/models';
import { createAction, props } from '@ngrx/store';

const loadStoreProducts = createAction(
  '[Store] Load Configurator Products'
);

const loadStoreProductsSuccess = createAction(
    '[Store] Load Configurator Products Success',
  props<StoreProducts>()
);

const loadStoreProductsFailed = createAction(
  '[Store] Load Configurator Products Failed'
);

export const StoreActions = {
    loadStoreProducts,
    loadStoreProductsSuccess,
    loadStoreProductsFailed
};
