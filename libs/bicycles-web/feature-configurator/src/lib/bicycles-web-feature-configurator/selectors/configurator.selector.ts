import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromConfigurator from '../reducers/configurator.reducer';

export const selectContractState = createFeatureSelector<fromConfigurator.State>(
    fromConfigurator.configuratorFeatureKey
);

export const selectConfiguratorOptions = createSelector(
    selectContractState,
    (state) => state.options
);

export const contractSelector = {
    selectConfiguratorOptions
}