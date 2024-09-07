import { Component, Input } from '@angular/core';
import { ConfiguratorComponent, ConfiguratorComponentOptions, ConfiguratorOptions } from '@factorial/models';

@Component({
  selector: 'feature-configurator-form',
  template: `
    <!-- no components message -->
    <p *ngIf="!hasComponents()">
      We can't find any information about this product 🙏
    </p>
    <!-- configurator -->
    <div *ngIf="hasComponents()">
      <form>
        <div class="form-columns">
          <div class="form-groups">
            <div *ngFor="let component of components">
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
  @Input() components: ConfiguratorComponent[] = []

  hasComponents(): boolean {
    return this.components.length > 0
  }

  outOfStockOptions(options: ConfiguratorComponentOptions[]): ConfiguratorComponentOptions[] {
    return options.filter((option) => option.stock !== null && option.stock === 0)
  }

  filterOutOfStockOptions(options: ConfiguratorComponentOptions[]): ConfiguratorComponentOptions[] {
    return options.filter((option) => option.stock === null || option.stock > 0)
  }
}
