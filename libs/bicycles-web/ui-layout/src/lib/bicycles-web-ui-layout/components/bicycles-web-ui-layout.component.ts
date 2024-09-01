import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BicyclesWebUiHeaderComponent } from "./bicycles-web-ui-header.component";
import { BicyclesWebUiFooterComponent } from './bicycles-web-ui-footer.component';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    CommonModule, BicyclesWebUiHeaderComponent, BicyclesWebUiFooterComponent
  ],
  template: `
    <layout-header></layout-header>
    <layout-footer></layout-footer>
  `,
  styleUrl: './bicycles-web-ui-layout.component.scss',
})

export class BicyclesWebUiLayoutComponent {}
