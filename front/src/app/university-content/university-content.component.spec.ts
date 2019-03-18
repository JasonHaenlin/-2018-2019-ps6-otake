import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityContentComponent } from './university-content.component';

describe('UniversityContentComponent', () => {
  let component: UniversityContentComponent;
  let fixture: ComponentFixture<UniversityContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversityContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversityContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
