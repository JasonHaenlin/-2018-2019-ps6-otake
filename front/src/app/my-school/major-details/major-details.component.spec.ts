import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorDetailsComponent } from './major-details.component';

describe('MajorDetailsComponent', () => {
  let component: MajorDetailsComponent;
  let fixture: ComponentFixture<MajorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
