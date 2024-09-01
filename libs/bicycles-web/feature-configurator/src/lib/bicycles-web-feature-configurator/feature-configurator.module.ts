import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureConfiguratorRoutingModule } from "./feature-configurator-routing.module";
import { FeatureConfiguratorComponent } from "./components/configurator.component";

@NgModule({
    declarations: [
      FeatureConfiguratorComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FeatureConfiguratorRoutingModule
    ],
  })
  
  export class FeatureConfiguratorModule {}