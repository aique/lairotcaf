import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ComponentOptionsResumeItem } from '@factorial/models';
import * as fromConfigurator from '../../../../../feature-configurator/src/lib/bicycles-web-feature-configurator/reducers/configurator.reducer';

export const selectCheckoutState = createFeatureSelector<fromConfigurator.State>(
    fromConfigurator.configuratorFeatureKey
);

export const selectOrder = createSelector(
    selectCheckoutState,
    (state) => state.order
);

export const selectOrderResume = createSelector(
    selectCheckoutState,
    (state) => {
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

export const checkoutSelector = {
    selectOrder,
    selectOrderResume
}