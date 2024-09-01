import { Route } from '@angular/router';
import { BicyclesWebUiLayoutComponent } from '@factorial/bicycles-web/ui-layout';

export const appRoutes: Route[] = [{
    path: '',
    component: BicyclesWebUiLayoutComponent,
    loadChildren: () => import('@factorial/bicycles-web/feature-store').then(({ FeatureStoreModule }) => FeatureStoreModule)
}];
