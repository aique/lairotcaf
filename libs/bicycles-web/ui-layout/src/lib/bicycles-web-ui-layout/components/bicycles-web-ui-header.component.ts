import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header>
      <h1>{{ title }}</h1>
    </header>
  `,
  styleUrl: './bicycles-web-ui-header.component.scss',
})

export class BicyclesWebUiHeaderComponent {
  title = "Marcus' Amazing Bikes"
}
