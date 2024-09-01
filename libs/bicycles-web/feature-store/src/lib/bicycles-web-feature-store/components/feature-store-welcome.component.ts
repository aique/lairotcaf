import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'feature-store',
  template: `
    <ul>
      <li><a routerLink="/configurator">Bike Configurator</a></li>
    </ul>
  `,
  styleUrl: './feature-store-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureStoreWelcomeComponent {}
