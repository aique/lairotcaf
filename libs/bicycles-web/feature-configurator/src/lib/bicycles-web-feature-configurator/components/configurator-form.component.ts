import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { contractSelector } from '../selectors/configurator.selector';

@Component({
  selector: 'feature-configurator-form',
  template: `
    <form>
      <p>{{ options$ | async | json }}</p>
      <input type="submit" value="I want it!" />
    </form>
  `,
  styleUrl: './configurator-form.component.scss',
})

export class FeatureConfiguratorFormComponent {
  options$

  constructor (private store: Store) {
    this.options$ = this.store.select(contractSelector.selectConfiguratorOptions)
  }
}
