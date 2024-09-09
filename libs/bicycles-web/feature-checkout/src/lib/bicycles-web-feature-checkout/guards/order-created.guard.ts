import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { checkoutSelector } from '../selectors/checkout.selector';

@Injectable({ providedIn: 'root' })
export class OrderCreatedGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(checkoutSelector.selectOrder).pipe(
      switchMap((order) => {
        if (order) {
          return of(true)
        }

        this.router.navigate(['/'])

        return of(false)
      })
    )
  }
}
