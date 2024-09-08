import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureCheckoutContainer } from "./containers/checkout.container";

const routes: Routes = [{
    path: '',
    component: FeatureCheckoutContainer
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureCheckoutRoutingModule {}