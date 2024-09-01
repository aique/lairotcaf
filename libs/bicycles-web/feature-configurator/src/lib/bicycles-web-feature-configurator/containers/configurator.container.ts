import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature-configurator-container',
  template: `
    <h3>Configurator</h3>
    <feature-configurator-form></feature-configurator-form>
  `,
  styleUrl: './configurator.container.scss',
})

export class FeatureConfiguratorContainer implements OnInit {
  ngOnInit(): void {
      
  }
}
