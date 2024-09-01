import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureConfiguratorRoutingModule } from "./feature-configurator-routing.module";
import { FeatureConfiguratorFormComponent } from "./components/configurator-form.component";
import { FeatureConfiguratorContainer } from "./containers/configurator.container";
import { EffectsModule } from "@ngrx/effects";
import { ConfiguratorEffects } from "./effects/configurator.effects";

@NgModule({
    declarations: [
      FeatureConfiguratorContainer,
      FeatureConfiguratorFormComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      EffectsModule.forFeature([ConfiguratorEffects]),
      FeatureConfiguratorRoutingModule
    ],
  })
  
  export class FeatureConfiguratorModule {}