import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeatureConfiguratorContainer } from "./containers/configurator.container";

const routes: Routes = [{
    path: '',
    component: FeatureConfiguratorContainer
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class FeatureConfiguratorRoutingModule {}