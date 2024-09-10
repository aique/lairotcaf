import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ComponentOptionsResumeItem } from '@factorial/models';
import * as fromCheckout from '../reducers/checkout.reducer';
import * as fromConfigurator from '../../../../../feature-configurator/src/lib/bicycles-web-feature-configurator/reducers/configurator.reducer';

export const selectConfiguratorState = createFeatureSelector<fromConfigurator.State>(
    fromConfigurator.configuratorFeatureKey
);

export const selectCheckoutState = createFeatureSelector<fromCheckout.State>(
    fromCheckout.checkoutFeatureKey
);

export const selectOrder = createSelector(
    selectConfiguratorState,
    (state) => state.order
);

export const selectOrderResume = createSelector(
    selectConfiguratorState,
    (state) => {
        if (!state.order) {
            return []
        }
        
        const resume: ComponentOptionsResumeItem[] = []

        for (let component of state.order.components) {
            resume.push({
                name: component.name,
                option: component.option.name,
                price: component.option.price
            })
        }

        return resume
    }
);

export const selectOrderPrice = createSelector(
    selectConfiguratorState,
    (state) => {
        if (!state.order) {
            return 0
        }

        let price = 0

        for (let component of state.order.components) {
            price += component.option.price
        }

        return price
    }
);

export const selectLoading = createSelector(
    selectCheckoutState,
    (state) => state.loading
);

export const selectSuccess = createSelector(
    selectCheckoutState,
    (state) => state.success
);

export const selectError = createSelector(
    selectCheckoutState,
    (state) => state.error
);

export const checkoutSelector = {
    selectOrder,
    selectOrderResume,
    selectOrderPrice,
    selectLoading,
    selectSuccess,
    selectError
}