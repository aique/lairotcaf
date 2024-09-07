import { ConfiguratorOptions } from "@factorial/models";
import { createReducer, on } from "@ngrx/store";
import { ConfiguratorActions } from "../actions/configurator.actions";

export const configuratorFeatureKey = 'configurator';

export interface State {
    options: ConfiguratorOptions
    loading: boolean
}

export const initialState: State = {
    options: {
        components: [],
    },
    loading: true
}

export const reducer = createReducer(
    initialState,
    on(
        ConfiguratorActions.loadConfiguratorOptionsSuccess,
        (state, { options }): State => ({
            ...state,
            options: options,
            loading: false
        })
    )
)