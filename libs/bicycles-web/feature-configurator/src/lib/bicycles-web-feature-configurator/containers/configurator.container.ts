import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ConfiguratorActions } from '../actions/configurator.actions';

@Component({
  selector: 'feature-configurator-container',
  template: `
    <div class="content">
      <h3>Configurator</h3>
      <feature-configurator-form></feature-configurator-form>
    </div>
  `,
  styleUrl: './configurator.container.scss',
})

export class FeatureConfiguratorContainer implements OnInit {
  constructor (private store: Store) {}

  ngOnInit(): void {
      this.store.dispatch(ConfiguratorActions.loadConfiguratorOptions(({ product: 'bike' })))
  }
}
