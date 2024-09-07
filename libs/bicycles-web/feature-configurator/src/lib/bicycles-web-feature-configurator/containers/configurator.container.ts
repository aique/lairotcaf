import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfiguratorActions } from '../actions/configurator.actions';
import { configuratorSelector } from '../selectors/configurator.selector';
import { ConfiguratorComponent, ConfiguratorOptions } from '@factorial/models';
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
        [components]="components"
      >
      </feature-configurator-form>
    </div>
  `,
  styleUrl: './configurator.container.scss',
})

export class FeatureConfiguratorContainer implements OnInit {
  product: string = '';
  loading: boolean = true;
  components: ConfiguratorComponent[] = []

  constructor (
    private store: Store,
    private route: ActivatedRoute
  ) {
    this.product = this.route.snapshot.queryParamMap.get('product') || '';

    this.store.select(configuratorSelector.selectConfiguratorOptions)
      .subscribe((options: ConfiguratorOptions) => {
        if (options) {
          this.components = options.components
        }
      })

    this.store.select(configuratorSelector.selectLoadingState)
      .subscribe((loading: boolean) => {
        this.loading = loading
      })
  }

  ngOnInit(): void {
      this.store.dispatch(ConfiguratorActions.loadConfiguratorOptions(({ product: this.product })))
  }
}
