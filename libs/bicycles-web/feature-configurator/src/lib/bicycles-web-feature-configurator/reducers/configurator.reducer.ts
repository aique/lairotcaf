import { ConfiguratorComponentCollection, ConfiguratorOptions } from "@factorial/models";
import { createReducer, on } from "@ngrx/store";
import { ConfiguratorActions } from "../actions/configurator.actions";

export const configuratorFeatureKey = 'configurator';

export interface State {
    components: ConfiguratorComponentCollection
    loading: boolean
}

export const initialState: State = {
    components: new ConfiguratorComponentCollection([]),
    loading: true
}

export const reducer = createReducer(
    initialState,
    on(
        ConfiguratorActions.loadConfiguratorOptionsSuccess,
        (state, response): State => ({
            ...state,
            components: new ConfiguratorComponentCollection(response.components),
            loading: false
        })
    )
)