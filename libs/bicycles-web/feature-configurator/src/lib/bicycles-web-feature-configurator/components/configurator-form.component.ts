import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutOrderProduct, ComponentOptionsResumeItem, ConfiguratorComponent, ConfiguratorComponentCollection, ConfiguratorComponentOption, ConfiguratorSelection } from '@factorial/models';

@Component({
  selector: 'feature-configurator-form',
  template: `
    <!-- no components message -->
    <p *ngIf="!hasComponents()">
      We can't find any information about this product 🙏
    </p>
    <!-- configurator -->
    <div *ngIf="hasComponents()">
      <form action="" (submit)="doSubmit($event)">
        <div class="form-columns">
          <div class="form-groups">
            <div *ngFor="let component of componentCollection.getComponents()">
              <div class="form-group">
                <!-- component options selector -->
                <label>{{ component.name }}</label>
                <select (change)="onConfiguratorOptionChange(component, $event)">
                  <option value="" selected>Please select one option</option>
                  <option [value]="option.id" *ngFor="let option of this.filterOutOfStockOptions(component.options)">
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
            <div class="submit-controls">
              <input
                class="button"
                [ngClass]="{ 'disabled': this.disableSubmit() }"
                type="submit"
                value="I want it!"
                [disabled]="this.disableSubmit()"
              />
              <span class="price" *ngIf="price">
                <span class="price-value">{{ price }}</span> €
              </span>
            </div>
            <p class="error" *ngIf="error">
              {{ error }}
            </p>
            <feature-configurator-resume
              [components]="resume"
              *ngIf="resume.length > 0"
            ></feature-configurator-resume>
          </div>
        </div>
      </form>
    </div>
  `,
  styleUrl: './configurator-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureConfiguratorFormComponent {
  @Input() product: string = ''
  @Input() componentCollection: ConfiguratorComponentCollection = new ConfiguratorComponentCollection([])
  @Output() checkout = new EventEmitter<CheckoutOrderProduct>();

  selectedOptions = new ConfiguratorSelection()
  selectedOptionIds: number[] = []

  error = ''
  price = 0
  resume: ComponentOptionsResumeItem[] = []

  hasComponents(): boolean {
    return this.componentCollection.length() > 0
  }

  disableSubmit(): boolean {
    return this.error !== '' ||
      !this.price ||
      this.selectedOptionIds.length !== this.componentCollection.length()
  }

  outOfStockOptions(options: ConfiguratorComponentOption[]): ConfiguratorComponentOption[] {
    return options.filter((option) => option.stock !== null && option.stock === 0)
  }

  filterOutOfStockOptions(options: ConfiguratorComponentOption[]): ConfiguratorComponentOption[] {
    return options.filter((option) => option.stock === null || option.stock > 0)
  }

  onConfiguratorOptionChange(component: ConfiguratorComponent, event: Event): void {
    const selectedComponent = event.target as HTMLSelectElement
    const selectedOptionId = Number(selectedComponent.value)
    const selectedOption = this.componentCollection.getOptionFromId(selectedOptionId);

    if (!selectedOption) {
      this.selectedOptions.delete(component.name)
    } else {
      this.selectedOptions.set(component.name, selectedOption)
    }

    this.selectedOptionIds = this.selectedOptions.getSelectedOptionIds()

    this.error = this.selectedOptions.getIncompatibleOptionsError()
    this.price = this.selectedOptions.getPrice()
    this.resume = this.selectedOptions.getResume()
  }

  doSubmit(event: Event): void {
    event.preventDefault()
    this.checkout.next(this.selectedOptions.getOrder(this.product))
  }
}
