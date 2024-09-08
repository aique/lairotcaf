import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { StoreActions } from '../actions/store.actions';
import { StoreProduct } from '@factorial/models';
import { storeSelector } from '../selectors/store.selector';

@Component({
  selector: 'feature-store-container',
  template: `
    <div class="content">
      <h3>Configurators</h3>
      <p>
        Customize your own sport complement with the latest components.
      </p>
      <!-- configurators list -->
      <feature-store-configurator-list
        [products]="products"
      ></feature-store-configurator-list>
    </div>
  `,
  styleUrl: './feature-store-welcome.container.scss',
})

export class FeatureStoreWelcomeContainer implements OnInit {
  products: StoreProduct[] = []

  constructor(private store: Store) {
    this.store.select(storeSelector.selectStoreProducts)
      .subscribe((products: StoreProduct[]) => {
        this.products = products
      })
  }

  ngOnInit(): void {
      this.store.dispatch(StoreActions.loadStoreProducts())
  }
}
