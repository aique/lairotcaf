import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureStoreWelcomeComponent } from "./components/feature-store-welcome.component";

const routes: Routes = [{
    path: '',
    component: FeatureStoreWelcomeComponent
}];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureStoreRoutingModule {}