import { createReducer, on } from "@ngrx/store";
import { CheckoutActions } from "../actions/checkout.actions";

export const checkoutFeatureKey = 'checkout';

export interface State {
    error: boolean
}

export const initialState: State = {
    error: false
}

export const reducer = createReducer(
    initialState,
    on(
        CheckoutActions.storeOrderSuccess,
        (state): State => ({
            ...state,
            error: false
        })
    ),
    on(
        CheckoutActions.storeOrderFailed,
        (state): State => ({
            ...state,
            error: true
        })
    ),
)