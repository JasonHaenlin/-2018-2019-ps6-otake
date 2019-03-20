import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlowWindowComponent } from './flow-window.component';

describe('TaskWindowComponent', () => {
  let component: FlowWindowComponent;
  let fixture: ComponentFixture<FlowWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FlowWindowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlowWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
