import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureConfiguratorRoutingModule } from "./feature-configurator-routing.module";
import { FeatureConfiguratorFormComponent } from "./components/configurator-form.component";
import { FeatureConfiguratorContainer } from "./containers/configurator.container";

@NgModule({
    declarations: [
      FeatureConfiguratorContainer,
      FeatureConfiguratorFormComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FeatureConfiguratorRoutingModule
    ],
  })
  
  export class FeatureConfiguratorModule {}