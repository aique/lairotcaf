import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureStoreWelcomeComponent } from './feature-store-welcome.component';

describe('BicyclesWebFeatureStoreComponent', () => {
  let component: FeatureStoreWelcomeComponent;
  let fixture: ComponentFixture<FeatureStoreWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureStoreWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureStoreWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
