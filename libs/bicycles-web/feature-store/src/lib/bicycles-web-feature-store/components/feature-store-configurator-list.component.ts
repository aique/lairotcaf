import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StoreProduct } from '@factorial/models';

@Component({
  selector: 'feature-store-configurator-list',
  template: `
      <div class="configurator-list">
        <ul>
          <li *ngFor="let product of products">
            <a class="button" routerLink="/configurator" [queryParams]="{product: product.slug}">
              {{ product.name }} Configurator
            </a>
          </li>
        </ul>
      </div>
  `,
  styleUrl: './feature-store-configurator-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureStoreConfiguratorListComponent {
  @Input() products: StoreProduct[] | null = []
}
