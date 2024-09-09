import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CheckoutUserData, ComponentOptionsResumeItem } from '@factorial/models';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'feature-checkout-form',
  template: `
    <!-- no order message -->
    <p *ngIf="false">
      We can't find any information about your order 🙏
    </p>
    <!-- checkout form -->
    <div *ngIf="true">
      <form [formGroup]="checkoutForm" (ngSubmit)="doSubmit()">
        <div class="form-columns">
          <div class="form-groups">
            <div class="form-group">
              <label>Nombre</label>
              <input formControlName="name" type="text" />
              <p class="error" *ngIf="this.checkoutForm.touched && this.checkoutForm.controls['name'].invalid">
                {{ INVALID_FIELD_ERROR }}
              </p>
            </div>
          </div>
          <!-- buy area -->
          <div class="submit-area">
            <div class="submit-controls">
              <input
                class="button"
                [ngClass]="{ 'disabled': disableSubmit() }"
                type="submit"
                value="Create order!"
                [disabled]="disableSubmit()"
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
  styleUrl: './checkout-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureCheckoutFormComponent {
  @Input() price: number | null = 0
  @Input() resume: ComponentOptionsResumeItem[] = []
  @Output() checkout = new EventEmitter<CheckoutUserData>()

  checkoutForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
  });

  readonly INVALID_FIELD_ERROR = 'Invalid form value'

  error = ''

  disableSubmit(): boolean {
    return this.checkoutForm.invalid
  }

  doSubmit(): void {
    if (this.checkoutForm.invalid) {
      this.error = "There are errors in your form data, please, review it"
      return
    }

    const { name } = this.checkoutForm.value;

    this.checkout.next({
      name: name || ''
    })
  }
}
