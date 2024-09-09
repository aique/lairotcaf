import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { StoreActions } from '../actions/store.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { StoreService } from '../services/store.service';

@Injectable()
export class StoreEffects {
    loadStoreProducts$

    constructor(
        private actions$: Actions,
        private store: StoreService
    ) {
        this.loadStoreProducts$ = createEffect(() => 
            this.actions$.pipe(
                ofType(StoreActions.loadStoreProducts),
                switchMap(() => this.store.getStoreProducts().pipe(
                    map((response) => StoreActions.loadStoreProductsSuccess(response)),
                    catchError(() => of(StoreActions.loadStoreProductsFailed()))
                )
            ))
        )
    }
}
