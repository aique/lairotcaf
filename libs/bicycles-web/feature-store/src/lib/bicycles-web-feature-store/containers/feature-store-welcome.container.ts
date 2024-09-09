import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreActions } from '../actions/store.actions';
import { StoreProduct } from '@factorial/models';
import { storeSelector } from '../selectors/store.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'feature-store-container',
  template: `
    <div class="content">
      <!-- error message -->
      <div *ngIf="error$ | async">
        <h3>Unavailable section</h3>
        <p>
          This section is temporary unavailable, sorry for the inconvenience 🙏
        </p>
      </div>
      <!-- section content -->
      <div *ngIf="!(error$ | async)">
        <h3>Configurators</h3>
        <p>
          Customize your own sport complement with the latest components.
        </p>
        <!-- configurators list -->
        <feature-store-configurator-list
          [products]="products$ | async"
        ></feature-store-configurator-list>
      </div>
    </div>
  `,
  styleUrl: './feature-store-welcome.container.scss',
})

export class FeatureStoreWelcomeContainer implements OnInit {
  error$: Observable<boolean>
  products$: Observable<StoreProduct[]>

  constructor(private store: Store) {
    this.error$ = this.store.select(storeSelector.selectError)
    this.products$ = this.store.select(storeSelector.selectStoreProducts)
  }

  ngOnInit(): void {
      this.store.dispatch(StoreActions.loadStoreProducts())
  }
}
