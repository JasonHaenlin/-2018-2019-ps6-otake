import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesHolderComponent } from './courses-holder.component';

describe('CoursesHolderComponent', () => {
  let component: CoursesHolderComponent;
  let fixture: ComponentFixture<CoursesHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
