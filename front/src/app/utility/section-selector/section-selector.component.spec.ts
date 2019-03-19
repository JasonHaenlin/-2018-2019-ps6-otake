import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectionComponent } from './section-selector.component';

describe('SectionSelectionComponent', () => {
  let component: SectionSelectionComponent;
  let fixture: ComponentFixture<SectionSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
