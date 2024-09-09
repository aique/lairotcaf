import { StoreProduct } from "@factorial/models";
import { createReducer, on } from "@ngrx/store";
import { StoreActions } from "../actions/store.actions";

export const storeFeatureKey = 'store';

export interface State {
    error: boolean,
    products: StoreProduct[]
}

export const initialState: State = {
    error: false,
    products: []
}

export const reducer = createReducer(
    initialState,
    on(
        StoreActions.loadStoreProductsSuccess,
        (state, response): State => ({
            ...state,
            products: response.products,
            error: false
        })
    ),
    on(
        StoreActions.loadStoreProductsFailed,
        (state): State => ({
            ...state,
            error: true
        })
    )
)