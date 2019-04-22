import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialAidPageComponent } from './financial-aid-page.component';

describe('FinancialAidPageComponent', () => {
  let component: FinancialAidPageComponent;
  let fixture: ComponentFixture<FinancialAidPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialAidPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialAidPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
