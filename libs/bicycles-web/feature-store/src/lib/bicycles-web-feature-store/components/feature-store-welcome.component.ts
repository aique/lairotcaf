import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'feature-store',
  template: `
    <ul>
      <li>Bike Configurator</li>
    </ul>
  `,
  styleUrl: './feature-store-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureStoreWelcomeComponent {}
