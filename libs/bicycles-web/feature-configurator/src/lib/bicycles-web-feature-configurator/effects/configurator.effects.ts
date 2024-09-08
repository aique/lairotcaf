import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConfiguratorActions } from '../actions/configurator.actions';
import { ConfiguratorService } from '../services/configurator.service';
import { map, switchMap, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ConfiguratorEffects {
    loadConfiguratorOptions$
    configurationCheckout$

    constructor(
        private actions$: Actions,
        private router: Router,
        private configurator: ConfiguratorService
    ) {
        this.loadConfiguratorOptions$ = createEffect(() => 
            this.actions$.pipe(
                ofType(ConfiguratorActions.loadConfiguratorOptions),
                switchMap((data) => this.configurator.getConfiguratorComponents(data.product).pipe(
                    map((response) => ConfiguratorActions.loadConfiguratorOptionsSuccess(response)
                ))
            ))
        )

        this.configurationCheckout$ = createEffect(() => {
            return this.actions$.pipe(
                ofType(ConfiguratorActions.configurationCheckout),
                tap(() => this.router.navigate(['/checkout']))
            )}, { dispatch: false }
        )
    }
}
