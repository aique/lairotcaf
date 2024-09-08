import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureStoreWelcomeContainer } from "./containers/feature-store-welcome.container";

const routes: Routes = [{
    path: '',
    component: FeatureStoreWelcomeContainer
}, {
    path: 'configurator',
    loadChildren: () => import('@factorial/bicycles-web/feature-configurator').then(({ FeatureConfiguratorModule }) => FeatureConfiguratorModule)
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureStoreRoutingModule {}