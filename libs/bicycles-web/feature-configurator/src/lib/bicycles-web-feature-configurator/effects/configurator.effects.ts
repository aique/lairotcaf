import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { ConfiguratorActions } from '../actions/configurator.actions';

@Injectable()
export class ConfiguratorEffects {
    loadConfiguratorOptions$

    constructor(
        private actions$: Actions
    ) {
        this.loadConfiguratorOptions$ = createEffect(() => 
            this.actions$.pipe(
                ofType(ConfiguratorActions.loadConfiguratorOptions),

                tap(() => console.log('downloading configurator options...'))
            ),
            { dispatch: false }
        )
    }
}
