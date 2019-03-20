import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStarterComponent } from './task-starter.component';

describe('TaskStarterComponent', () => {
  let component: TaskStarterComponent;
  let fixture: ComponentFixture<TaskStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskStarterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
