import { Component } from '@angular/core';
import { CheckoutOrderProduct, CheckoutUserData, ComponentOptionsResumeItem } from '@factorial/models';
import { Store } from '@ngrx/store';
import { CheckoutActions } from '../actions/checkout.actions';
import { Observable } from 'rxjs';
import { checkoutSelector } from '../selectors/checkout.selector';

@Component({
  selector: 'feature-checkout-container',
  template: `
    <div class="content">
      <h3>Checkout</h3>
      <feature-checkout-form
        *ngIf="resume$ | async as resume"
        [price]="price$ | async"
        [resume]="resume"
        [requestError]="(requestError$ | async) || false"
        [requestLoading]="(requestLoading$ | async) || false"
        [requestSuccess]="(requestSuccess$ | async) || false"
        (checkout)="doCheckout($event)"
      ></feature-checkout-form>
    </div>
  `,
  styleUrl: './checkout.container.scss',
})

export class FeatureCheckoutContainer {
  resume$: Observable<ComponentOptionsResumeItem[]>
  price$: Observable<number>
  
  requestError$: Observable<boolean>
  requestLoading$: Observable<boolean>
  requestSuccess$: Observable<boolean>

  productOrder$ = Observable<CheckoutOrderProduct>;

  constructor(private store: Store) {
    this.resume$ = this.store.select(checkoutSelector.selectOrderResume)
    this.price$ = this.store.select(checkoutSelector.selectOrderPrice)
    this.requestError$ = this.store.select(checkoutSelector.selectError)
    this.requestLoading$ = this.store.select(checkoutSelector.selectLoading)
    this.requestSuccess$ = this.store.select(checkoutSelector.selectSuccess)
  }

  doCheckout(userData: CheckoutUserData): void {
    this.store.dispatch(CheckoutActions.storeOrder(userData))
  }
}
