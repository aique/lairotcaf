import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'feature-store',
  template: `
    <ul>
      <li>
        <a routerLink="/configurator" [queryParams]="{product: 'bicycle'}">
          Bike Configurator
        </a>
      </li>
    </ul>
  `,
  styleUrl: './feature-store-welcome.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureStoreWelcomeComponent {}
