import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BicyclesWebUiFooterComponent } from './bicycles-web-ui-footer.component';

describe('BicyclesWebUiFooterComponent', () => {
  let component: BicyclesWebUiFooterComponent;
  let fixture: ComponentFixture<BicyclesWebUiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BicyclesWebUiFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BicyclesWebUiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
