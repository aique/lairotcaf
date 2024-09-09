import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureCheckoutContainer } from "./containers/checkout.container";
import { OrderCreatedGuard } from "./guards/order-created.guard";

const routes: Routes = [{
    path: '',
    canActivate: [OrderCreatedGuard],
    component: FeatureCheckoutContainer
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureCheckoutRoutingModule {}