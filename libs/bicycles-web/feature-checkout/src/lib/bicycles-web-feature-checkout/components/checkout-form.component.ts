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
              <label>Name</label>
              <input formControlName="name" type="text" />
              <p class="error" *ngIf="isInvalidField('name')">
                {{ INVALID_FIELD_ERROR }}
              </p>
            </div>
            <div class="form-group">
              <label>Surname</label>
              <input formControlName="surname" type="text" />
              <p class="error" *ngIf="isInvalidField('surname')">
                {{ INVALID_FIELD_ERROR }}
              </p>
            </div>
            <div class="form-group">
              <label>Email</label>
              <input formControlName="email" type="text" />
              <p class="error" *ngIf="isInvalidField('email')">
                {{ INVALID_FIELD_ERROR }}
              </p>
            </div>
            <div class="form-group">
              <label>Contact Phone</label>
              <input formControlName="phone" type="text" />
              <p class="error" *ngIf="isInvalidField('phone')">
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
            <p class="error" *ngIf="requestError">
              Error creating your order, please, contact us if the error persists
            </p>
            <p class="success" *ngIf="requestSuccess">
              Order submited successfully!
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
  @Input() requestError: boolean = false
  @Input() requestLoading: boolean = false
  @Input() requestSuccess: boolean = false

  @Output() checkout = new EventEmitter<CheckoutUserData>()

  checkoutForm = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [Validators.required]),
  });

  readonly INVALID_FIELD_ERROR = 'Invalid form value'

  error = ''

  isInvalidField(fieldName: string): boolean {
    const control = this.checkoutForm.get(fieldName)

    if (!control) {
      return false
    }

    return control.touched && control.invalid
  }

  disableSubmit(): boolean {
    return this.checkoutForm.invalid || this.requestLoading || this.requestSuccess
  }

  doSubmit(): void {
    if (this.checkoutForm.invalid) {
      this.error = "There are errors in your form data, please, review it"
      return
    }

    const {
      name, surname, email, phone
    } = this.checkoutForm.value;

    this.checkout.next({
      name: name || '',
      surname: surname || '',
      email: email || '',
      phone: phone || '',
    })
  }
}
