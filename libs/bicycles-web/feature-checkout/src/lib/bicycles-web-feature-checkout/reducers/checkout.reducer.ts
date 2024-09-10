import { createReducer, on } from "@ngrx/store";
import { CheckoutActions } from "../actions/checkout.actions";

export const checkoutFeatureKey = 'checkout';

export interface State {
    error: boolean
    loading: boolean
    success: boolean
}

export const initialState: State = {
    error: false,
    loading: false,
    success: false
}

export const reducer = createReducer(
    initialState,
    on(
        CheckoutActions.storeOrder,
        (state): State => ({
            ...state,
            error: false,
            loading: true,
            success: false
        })
    ),
    on(
        CheckoutActions.storeOrderSuccess,
        (state): State => ({
            ...state,
            error: false,
            loading: false,
            success: true
        })
    ),
    on(
        CheckoutActions.storeOrderFailed,
        (state): State => ({
            ...state,
            error: true,
            loading: false,
            success: false
        })
    ),
)