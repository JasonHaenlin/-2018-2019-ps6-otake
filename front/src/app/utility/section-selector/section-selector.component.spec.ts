import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSelectorComponent } from './section-selector.component';

describe('SectionSelectionComponent', () => {
  let component: SectionSelectorComponent;
  let fixture: ComponentFixture<SectionSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
