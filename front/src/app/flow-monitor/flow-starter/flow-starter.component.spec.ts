import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowStarterComponent } from './flow-starter.component';

describe('TaskStarterComponent', () => {
  let component: FlowStarterComponent;
  let fixture: ComponentFixture<FlowStarterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlowStarterComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
