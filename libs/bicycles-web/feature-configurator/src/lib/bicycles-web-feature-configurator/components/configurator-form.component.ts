import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { contractSelector } from '../selectors/configurator.selector';

@Component({
  selector: 'feature-configurator-form',
  template: `
    <p *ngIf="!(options$ | async)">
      No hemos podido obtener información sobre el producto 🙏
    </p>
    <div *ngIf="options$ | async as options">
      <form>
        <div class="form-columns">
          <div class="form-groups">
            <div *ngFor="let component of options.components">
              <div class="form-group">
                <label>{{ component.name }}</label>
                <select>
                  <option *ngFor="let option of component.options">
                    {{ option.name }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="submit-area">
            <input class="submit-buttom" type="submit" value="I want it!" />
            <span class="price">
              <span class="price-value">66,38</span> €
            </span>
          </div>
        </div>
      </form>
    </div>
  `,
  styleUrl: './configurator-form.component.scss',
})

export class FeatureConfiguratorFormComponent {
  options$

  constructor (private store: Store) {
    this.options$ = this.store.select(contractSelector.selectConfiguratorOptions)
  }
}
