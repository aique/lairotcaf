import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureStoreWelcomeContainer } from "./containers/feature-store-welcome.container";

const routes: Routes = [{
    path: '',
    component: FeatureStoreWelcomeContainer
}, {
    path: 'configurator',
    loadChildren: () => import('@factorial/bicycles-web/feature-configurator').then(({ FeatureConfiguratorModule }) => FeatureConfiguratorModule)
}, {
    path: 'checkout',
    loadChildren: () => import('@factorial/bicycles-web/feature-checkout').then(({ FeatureCheckoutModule }) => FeatureCheckoutModule)
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureStoreRoutingModule {}