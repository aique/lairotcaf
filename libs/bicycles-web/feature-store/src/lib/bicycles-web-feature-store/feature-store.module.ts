import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FeatureStoreWelcomeComponent } from "./components/feature-store-welcome.component";
import { FeatureStoreRoutingModule } from "./feature-store-routing.module";

@NgModule({
    declarations: [
      FeatureStoreWelcomeComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      FeatureStoreRoutingModule
    ],
  })
  
  export class FeatureStoreModule {}