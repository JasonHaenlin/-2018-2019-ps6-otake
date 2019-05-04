import { FlowService } from './../flow.service';
import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Step } from '../flow-step/step';
import { STEP_LIST } from './step.data';

@Component({
  selector: 'app-flow-window',
  templateUrl: './flow-window.component.html',
  styleUrls: ['./flow-window.component.scss']
})
export class FlowWindowComponent implements OnInit {
  @Output() windowStateEvent = new EventEmitter<boolean>();
  @Output() windowCloseEvent = new EventEmitter<any>();

  public stepList: Step[] = STEP_LIST;
  public windowState = true;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.updateWindowState(false);
    }
  }

  constructor(private eRef: ElementRef,
    private flowService: FlowService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() { }


  updateWindowState(state?: boolean) {
    const lastState = this.windowState;
    if (state !== undefined) {
      this.windowState = state;
    } else {
      this.windowState = !this.windowState;
    }
    if (this.windowState !== lastState) {
      this.windowStateEvent.emit(this.windowState);
    }
  }

  windowCloseEventEmiter() {
    this.windowCloseEvent.emit();
  }

  clearSteps() {
    this.flowService.clearState(this.stepList.length);
  }

}
