import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComponentOptionsResumeItem } from '@factorial/models';

@Component({
  selector: 'feature-configurator-resume',
  template: `
    <h5>Resume</h5>
    <ul>
      <li *ngFor="let resumeItem of components">
        <span class="resume-component">{{ resumeItem.name }}</span>
        <span class="resume-option">{{ resumeItem.option }} (<b>{{ resumeItem.price }} €</b>)</span>
      </li>
    </ul>
  `,
  styleUrl: './configurator-resume.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class FeatureConfiguratorResumeComponent {
  @Input() components: ComponentOptionsResumeItem[] = []
}
