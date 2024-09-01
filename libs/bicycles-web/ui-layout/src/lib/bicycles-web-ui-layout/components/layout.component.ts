import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHeaderComponent } from "./layout-header.component";
import { LayoutFooterComponent } from './layout-footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutHeaderComponent,
    LayoutFooterComponent
  ],
  template: `
    <layout-header></layout-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <layout-footer></layout-footer>
  `,
  styleUrl: './layout.component.scss',
})

export class LayoutComponent {}
