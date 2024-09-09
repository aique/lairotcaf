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
        [resume]="resume"
        (checkout)="doCheckout($event)"
      ></feature-checkout-form>
    </div>
  `,
  styleUrl: './checkout.container.scss',
})

export class FeatureCheckoutContainer {
  resume$: Observable<ComponentOptionsResumeItem[]>

  productOrder$ = Observable<CheckoutOrderProduct>;

  constructor(private store: Store) {
    this.resume$ = this.store.select(checkoutSelector.selectOrderResume)
  }

  doCheckout(userData: CheckoutUserData): void {
    this.store.dispatch(CheckoutActions.storeOrder(userData))
  }
}
