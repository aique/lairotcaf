import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureCheckoutRoutingModule } from "./feature-checkout-routing.module";
import { FeatureCheckoutContainer } from "./containers/checkout.container";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { FeatureCheckoutFormComponent } from "./components/checkout-form.component";
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { CheckoutEffects } from "./effects/checkout.effects";
import { CheckoutService } from "./services/checkout.service";
import { FeatureConfiguratorModule } from "@factorial/bicycles-web/feature-configurator";
import { StoreModule } from "@ngrx/store";
import * as fromCheckout from './reducers/checkout.reducer';

@NgModule({
    declarations: [
      FeatureCheckoutContainer,
      FeatureCheckoutFormComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      ReactiveFormsModule,
      EffectsModule.forFeature([CheckoutEffects]),
      StoreModule.forFeature(fromCheckout.checkoutFeatureKey, fromCheckout.reducer),
      FeatureCheckoutRoutingModule,
      FeatureConfiguratorModule
    ],
    providers: [
      CheckoutService,
      provideHttpClient(withInterceptorsFromDi())
    ]
  })
  
  export class FeatureCheckoutModule {}