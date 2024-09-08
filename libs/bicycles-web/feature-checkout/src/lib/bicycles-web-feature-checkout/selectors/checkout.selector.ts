import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromConfigurator from '../../../../../feature-configurator/src/lib/bicycles-web-feature-configurator/reducers/configurator.reducer';

export const selectCheckoutState = createFeatureSelector<fromConfigurator.State>(
    fromConfigurator.configuratorFeatureKey
);

export const selectOrder = createSelector(
    selectCheckoutState,
    (state) => state.order
);

export const checkoutSelector = {
    selectOrder
}