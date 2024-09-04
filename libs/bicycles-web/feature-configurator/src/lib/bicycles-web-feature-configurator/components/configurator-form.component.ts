import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { contractSelector } from '../selectors/configurator.selector';
import { ConfiguratorComponentOptions } from '@factorial/models';

@Component({
  selector: 'feature-configurator-form',
  template: `
    <p *ngIf="!(options$ | async)">
      We can't find any information about this product 🙏
    </p>
    <div *ngIf="options$ | async as options">
      <form>
        <div class="form-columns">
          <div class="form-groups">
            <div *ngFor="let component of options.components">
              <div class="form-group">
                <!-- component options selector -->
                <label>{{ component.name }}</label>
                <select>
                  <option *ngFor="let option of this.filterOutOfStockOptions(component.options)">
                    {{ option.name }}
                  </option>
                </select>
                <!-- out of stock items -->
                <div *ngIf="this.outOfStockOptions(component.options) as outOfStockOptions">
                  <p *ngIf="outOfStockOptions.length > 0">
                    <span class="out-of-stock-message">The next options are out of stock:</span>
                    <span *ngFor="let option of outOfStockOptions" class="tag">
                      {{ option.name }}
                    </span>
                  <p>
                </div>
              </div>
            </div>
          </div>
          <!-- buy area -->
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

  outOfStockOptions(options: ConfiguratorComponentOptions[]): ConfiguratorComponentOptions[] {
    return options.filter((option) => option.stock !== null && option.stock === 0)
  }

  filterOutOfStockOptions(options: ConfiguratorComponentOptions[]): ConfiguratorComponentOptions[] {
    return options.filter((option) => option.stock === null || option.stock > 0)
  }
}
