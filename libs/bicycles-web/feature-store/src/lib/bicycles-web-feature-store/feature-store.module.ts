import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureStoreConfiguratorListComponent } from "./components/feature-store-configurator-list.component";
import { FeatureStoreRoutingModule } from "./feature-store-routing.module";
import { FeatureStoreWelcomeContainer } from "./containers/feature-store-welcome.container";
import { EffectsModule } from "@ngrx/effects";
import { StoreEffects } from "./effects/store.effects";
import { StoreService } from "./services/store.service";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";
import * as fromStore from './reducers/store.reducer';

@NgModule({
    declarations: [
      FeatureStoreWelcomeContainer,
      FeatureStoreConfiguratorListComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      EffectsModule.forFeature([StoreEffects]),
      StoreModule.forFeature(fromStore.storeFeatureKey, fromStore.reducer),
      FeatureStoreRoutingModule
    ],
    providers: [
      StoreService,
      provideHttpClient(withInterceptorsFromDi())
    ]
  })
  
  export class FeatureStoreModule {}