import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicyclesWebUiHeaderComponent } from "./bicycles-web-ui-header.component";
import { BicyclesWebUiFooterComponent } from './bicycles-web-ui-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BicyclesWebUiHeaderComponent,
    BicyclesWebUiFooterComponent
  ],
  template: `
    <layout-header></layout-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <layout-footer></layout-footer>
  `,
  styleUrl: './bicycles-web-ui-layout.component.scss',
})

export class BicyclesWebUiLayoutComponent {}
