import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStore from '../reducers/store.reducer';

export const selectStoreState = createFeatureSelector<fromStore.State>(
    fromStore.storeFeatureKey
);

export const selectError = createSelector(
    selectStoreState,
    (state) => state.error
);

export const selectStoreProducts = createSelector(
    selectStoreState,
    (state) => state.products
);

export const storeSelector = {
    selectError,
    selectStoreProducts,
}