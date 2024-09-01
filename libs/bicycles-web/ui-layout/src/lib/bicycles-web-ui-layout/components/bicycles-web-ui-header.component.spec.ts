import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BicyclesWebUiHeaderComponent } from './bicycles-web-ui-header.component';

describe('BicyclesWebUiHeaderComponent', () => {
  let component: BicyclesWebUiHeaderComponent;
  let fixture: ComponentFixture<BicyclesWebUiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BicyclesWebUiHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BicyclesWebUiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Marcus' Amazing Bikes'`, () => {
    const fixture = TestBed.createComponent(BicyclesWebUiHeaderComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("Marcus' Amazing Bikes");
  });
});
