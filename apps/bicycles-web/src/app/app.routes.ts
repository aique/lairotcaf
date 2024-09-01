import { Route } from '@angular/router';
import { LayoutComponent } from '@factorial/bicycles-web/ui-layout';

export const appRoutes: Route[] = [{
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('@factorial/bicycles-web/feature-store').then(({ FeatureStoreModule }) => FeatureStoreModule)
}];
