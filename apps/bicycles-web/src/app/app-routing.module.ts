import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LayoutComponent } from '@factorial/bicycles-web/ui-layout';

export const ROUTES: Route[] = [{
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('@factorial/bicycles-web/feature-store').then(({ FeatureStoreModule }) => FeatureStoreModule)
}];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, {
        initialNavigation: 'enabledBlocking',
        scrollPositionRestoration: 'enabled',
    }),
    ],
    exports: [RouterModule],
})
  
export class AppRoutingModule {}