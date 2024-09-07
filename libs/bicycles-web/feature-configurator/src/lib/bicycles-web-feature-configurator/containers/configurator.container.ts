import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfiguratorActions } from '../actions/configurator.actions';
import { configuratorSelector } from '../selectors/configurator.selector';
import { ConfiguratorComponentCollection, ConfiguratorOptions } from '@factorial/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'feature-configurator-container',
  template: `
    <div class="content">
      <h3>Configurator</h3>
      <!-- loading spinner during configurator components are loading -->
      <loading-spinner
        *ngIf="loading"
      ></loading-spinner>
      <!-- configurator form -->
      <feature-configurator-form
        *ngIf="!loading"
        [componentCollection]="componentCollection"
      >
      </feature-configurator-form>
    </div>
  `,
  styleUrl: './configurator.container.scss',
})

export class FeatureConfiguratorContainer implements OnInit {
  product: string = '';
  loading: boolean = true;
  componentCollection: ConfiguratorComponentCollection = new ConfiguratorComponentCollection([])

  constructor (
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.product = this.getProductFromQueryParam();

    this.store.select(configuratorSelector.selectConfiguratorComponents)
      .subscribe((components: ConfiguratorComponentCollection) => {
        this.componentCollection = components
      })

    this.store.select(configuratorSelector.selectLoadingState)
      .subscribe((loading: boolean) => {
        this.loading = loading
      })
  }

  ngOnInit(): void {
      this.store.dispatch(ConfiguratorActions.loadConfiguratorOptions(({ product: this.product })))
  }

  getProductFromQueryParam(): string {
    return this.route.snapshot.queryParamMap.get('product') || ''
  }
}
