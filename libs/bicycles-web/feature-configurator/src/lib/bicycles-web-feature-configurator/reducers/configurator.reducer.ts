import { CheckoutOrderProduct, ConfiguratorComponent } from "@factorial/models";
import { createReducer, on } from "@ngrx/store";
import { ConfiguratorActions } from "../actions/configurator.actions";

export const configuratorFeatureKey = 'configurator';

export interface State {
    order: CheckoutOrderProduct | null,
    components: ConfiguratorComponent[]
    loading: boolean
}

export const initialState: State = {
    order: null,
    components: [],
    loading: true
}

export const reducer = createReducer(
    initialState,
    on(
        ConfiguratorActions.loadConfiguratorOptionsSuccess,
        (state, response): State => ({
            ...state,
            components: response.components,
            loading: false
        })
    ),
    on(
        ConfiguratorActions.loadConfiguratorOptionsFailed,
        (state): State => ({
            ...state,
            loading: false
        })
    ),
    on(
        ConfiguratorActions.configurationCheckout,
        (state, order): State => ({
            ...state,
            order
        })
    )
)