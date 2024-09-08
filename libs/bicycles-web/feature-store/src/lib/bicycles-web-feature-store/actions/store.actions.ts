import { StoreProducts } from '@factorial/models';
import { createAction, props } from '@ngrx/store';

const loadStoreProducts = createAction(
  '[Store] Load Configurator Products'
);

const loadStoreProductsSuccess = createAction(
    '[Store] Load Configurator Products Success',
  props<StoreProducts>()
);

export const StoreActions = {
    loadStoreProducts,
    loadStoreProductsSuccess
};
