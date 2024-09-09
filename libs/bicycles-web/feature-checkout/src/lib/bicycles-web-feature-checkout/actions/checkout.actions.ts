import { CheckoutUserData } from '@factorial/models';
import { createAction, props } from '@ngrx/store';

const storeOrder = createAction(
  '[Checkout] Store Order',
  props<CheckoutUserData>()
);

const storeOrderSuccess = createAction(
  '[Checkout] Store Order Success'
);

const storeOrderFailed = createAction(
  '[Checkout] Store Order Failder'
);

export const CheckoutActions = {
  storeOrder,
  storeOrderSuccess,
  storeOrderFailed
};
