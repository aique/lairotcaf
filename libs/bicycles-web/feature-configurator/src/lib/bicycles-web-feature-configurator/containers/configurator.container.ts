import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfiguratorActions } from '../actions/configurator.actions';
import { configuratorSelector } from '../selectors/configurator.selector';
import { CheckoutOrderProduct, ConfiguratorComponent, ConfiguratorComponentCollection } from '@factorial/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'feature-configurator-container',
  template: `
    <div class="content">
      <h3>Configurator</h3>
      <!-- loading spinner during configurator components are loading -->
      <loading-spinner
        *ngIf="loading$ | async"
      ></loading-spinner>
      <!-- configurator form -->
      <feature-configurator-form
        *ngIf="!(loading$ | async)"
        [product]="product"
        [componentCollection]="componentCollection"
        (checkout)="doCheckout($event)"
      >
      </feature-configurator-form>
    </div>
  `,
  styleUrl: './configurator.container.scss',
})

export class FeatureConfiguratorContainer implements OnInit {
  loading$: Observable<boolean>

  product: string = ''
  componentCollection: ConfiguratorComponentCollection = new ConfiguratorComponentCollection([])

  constructor (
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.product = this.getProductFromQueryParam();
    this.loading$ = this.store.select(configuratorSelector.selectLoadingState)

    this.store.select(configuratorSelector.selectConfiguratorComponents)
      .subscribe((components: ConfiguratorComponent[]) => {
        this.componentCollection = new ConfiguratorComponentCollection(components)
      })
  }

  ngOnInit(): void {
      this.store.dispatch(ConfiguratorActions.loadConfiguratorOptions(({ product: this.product })))
  }

  getProductFromQueryParam(): string {
    return this.route.snapshot.queryParamMap.get('product') || ''
  }

  doCheckout(order: CheckoutOrderProduct): void {
    this.store.dispatch(ConfiguratorActions.configurationCheckout(order))
  }
}
