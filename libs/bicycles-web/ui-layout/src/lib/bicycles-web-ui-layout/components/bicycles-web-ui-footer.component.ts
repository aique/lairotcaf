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
  styleUrl: './bicycles-web-ui-footer.component.scss',
})

export class BicyclesWebUiFooterComponent {
  email = 'marcusbikes@mail.com'
}
