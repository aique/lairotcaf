import { CheckoutUserData } from '@factorial/models';
import { createAction, props } from '@ngrx/store';

const storeOrder = createAction(
  '[Checkout] Store Order',
  props<CheckoutUserData>()
);

const storeOrderSuccess = createAction(
  '[Checkout] Store Order Success'
);

export const CheckoutActions = {
  storeOrder,
  storeOrderSuccess
};
