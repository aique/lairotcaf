import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromConfigurator from '../reducers/configurator.reducer';

export const selectConfiguratorState = createFeatureSelector<fromConfigurator.State>(
    fromConfigurator.configuratorFeatureKey
);

export const selectConfiguratorOptions = createSelector(
    selectConfiguratorState,
    (state) => state.options
);

export const selectLoadingState = createSelector(
    selectConfiguratorState,
    (state) => state.loading
);

export const configuratorSelector = {
    selectConfiguratorOptions,
    selectLoadingState,
}