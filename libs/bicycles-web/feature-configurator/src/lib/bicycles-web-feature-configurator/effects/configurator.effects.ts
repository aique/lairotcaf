import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ConfiguratorActions } from '../actions/configurator.actions';
import { ConfiguratorService } from '../services/configurator.service';
import { map, of, switchMap } from 'rxjs';

@Injectable()
export class ConfiguratorEffects {
    loadConfiguratorOptions$

    constructor(
        private actions$: Actions,
        private configurator: ConfiguratorService
    ) {
        this.loadConfiguratorOptions$ = createEffect(() => 
            this.actions$.pipe(
                ofType(ConfiguratorActions.loadConfiguratorOptions),
                switchMap((data) => this.configurator.getConfiguratorOptions(data.product).pipe(
                    map((options) => ConfiguratorActions.loadConfiguratorOptionsSuccess({ options })
                ))
            ))
        )
    }
}
