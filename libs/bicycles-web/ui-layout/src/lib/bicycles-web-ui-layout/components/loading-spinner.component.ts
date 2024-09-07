import { Component, Input } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  standalone: true,
  template: `
    <div class="loading-overlay">
      <div class="spinner"></div>
    </div>
  `,
  styleUrl: './loading-spinner.component.scss'
})

export class LoadingSpinnerComponent {}
