import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'layout-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
     <footer>
      <p>
        <a href="mailto:{{ email }}">{{ email }}</a>
      </p>
    </footer> 
  `,
  styleUrl: './layout-footer.component.scss',
})

export class LayoutFooterComponent {
  email = 'marcusbikes@mail.com'
}
