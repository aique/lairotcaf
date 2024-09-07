import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureConfiguratorRoutingModule } from "./feature-configurator-routing.module";
import { FeatureConfiguratorFormComponent } from "./components/configurator-form.component";
import { FeatureConfiguratorContainer } from "./containers/configurator.container";
import { EffectsModule } from "@ngrx/effects";
import { ConfiguratorEffects } from "./effects/configurator.effects";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { ConfiguratorService } from "./services/configurator.service";
import { StoreModule } from "@ngrx/store";
import * as fromConfigurator from './reducers/configurator.reducer';
import { LoadingSpinnerComponent } from '@factorial/bicycles-web/ui-layout';

@NgModule({
    declarations: [
      FeatureConfiguratorContainer,
      FeatureConfiguratorFormComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      EffectsModule.forFeature([ConfiguratorEffects]),
      StoreModule.forFeature(fromConfigurator.configuratorFeatureKey, fromConfigurator.reducer),
      LoadingSpinnerComponent,
      FeatureConfiguratorRoutingModule
    ],
    providers: [
      ConfiguratorService,
      provideHttpClient(withInterceptorsFromDi())
    ]
  })
  
  export class FeatureConfiguratorModule {}