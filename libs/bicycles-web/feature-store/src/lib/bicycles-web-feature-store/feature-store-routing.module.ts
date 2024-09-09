import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureStoreWelcomeContainer } from "./containers/feature-store-welcome.container";
import { OrderCreatedGuard } from "libs/bicycles-web/feature-checkout/src/lib/bicycles-web-feature-checkout/guards/order-created.guard";

const routes: Routes = [{
    path: '',
    component: FeatureStoreWelcomeContainer
}, {
    path: 'configurator',
    loadChildren: () => import('@factorial/bicycles-web/feature-configurator').then(({ FeatureConfiguratorModule }) => FeatureConfiguratorModule)
}, {
    path: 'checkout',
    canActivate: [OrderCreatedGuard],
    loadChildren: () => import('@factorial/bicycles-web/feature-checkout').then(({ FeatureCheckoutModule }) => FeatureCheckoutModule),
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureStoreRoutingModule {}