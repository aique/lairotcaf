import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BicyclesWebUiLayoutComponent } from './bicycles-web-ui-layout.component';

describe('BicyclesWebUiLayoutComponent', () => {
  let component: BicyclesWebUiLayoutComponent;
  let fixture: ComponentFixture<BicyclesWebUiLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BicyclesWebUiLayoutComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BicyclesWebUiLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
