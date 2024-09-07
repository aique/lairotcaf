import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromConfigurator from '../reducers/configurator.reducer';

export const selectConfiguratorState = createFeatureSelector<fromConfigurator.State>(
    fromConfigurator.configuratorFeatureKey
);

export const selectConfiguratorComponents = createSelector(
    selectConfiguratorState,
    (state) => state.components
);

export const selectLoadingState = createSelector(
    selectConfiguratorState,
    (state) => state.loading
);

export const configuratorSelector = {
    selectConfiguratorComponents,
    selectLoadingState,
}