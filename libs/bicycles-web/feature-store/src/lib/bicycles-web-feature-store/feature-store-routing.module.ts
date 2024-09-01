import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureStoreWelcomeComponent } from "./components/feature-store-welcome.component";

const routes: Routes = [{
    path: '',
    component: FeatureStoreWelcomeComponent
}, {
    path: 'configurator',
    loadChildren: () => import('@factorial/bicycles-web/feature-configurator').then(({ FeatureConfiguratorModule }) => FeatureConfiguratorModule)
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureStoreRoutingModule {}