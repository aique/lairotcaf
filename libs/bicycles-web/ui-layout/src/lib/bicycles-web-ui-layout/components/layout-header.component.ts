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
  styleUrl: './layout-header.component.scss',
})

export class LayoutHeaderComponent {
  title = "Marcus' Amazing Bikes"
}
