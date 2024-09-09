import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CheckoutService } from '../services/checkout.service';
import { map, switchMap, withLatestFrom } from 'rxjs';
import { CheckoutActions } from '../actions/checkout.actions';
import { Store } from '@ngrx/store';
import { checkoutSelector } from '../selectors/checkout.selector';

@Injectable()
export class CheckoutEffects {
    storeOrder$

    constructor(
        private actions$: Actions,
        private store: Store,
        private checkout: CheckoutService
    ) {
        this.storeOrder$ = createEffect(() => 
            this.actions$.pipe(
                ofType(CheckoutActions.storeOrder),
                withLatestFrom(this.store.select(checkoutSelector.selectOrder)),
                switchMap(([userData, productOrder]) => {
                    return this.checkout.setOrder({ userData, productOrder }).pipe(
                        map((response) => {
                            if (response) {
                                return CheckoutActions.storeOrderSuccess()
                            }

                            return CheckoutActions.storeOrderFailed()
                        })
                    )
            }))
        )
    }
}
