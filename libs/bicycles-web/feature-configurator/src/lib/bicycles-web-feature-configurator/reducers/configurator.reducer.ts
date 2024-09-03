import { ConfiguratorOptions } from "@factorial/models";
import { createReducer, on } from "@ngrx/store";
import { ConfiguratorActions } from "../actions/configurator.actions";

export const configuratorFeatureKey = 'configurator';

export interface State {
    options: ConfiguratorOptions
}

export const initialState: State = {
    options: {
        components: []
    }
}

export const reducer = createReducer(
    initialState,
    on(
        ConfiguratorActions.loadConfiguratorOptionsSuccess,
        (state, { options }): State => ({
            ...state,
            options: options
        })
    )
)