import { ConfiguratorComponent } from "@factorial/models";
import { createReducer, on } from "@ngrx/store";
import { ConfiguratorActions } from "../actions/configurator.actions";

export const configuratorFeatureKey = 'configurator';

export interface State {
    components: ConfiguratorComponent[]
    loading: boolean
}

export const initialState: State = {
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
    )
)