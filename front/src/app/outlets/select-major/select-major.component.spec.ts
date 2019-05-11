import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectMajorComponent } from './select-major.component';

describe('SelectMajorComponent', () => {
  let component: SelectMajorComponent;
  let fixture: ComponentFixture<SelectMajorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectMajorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
