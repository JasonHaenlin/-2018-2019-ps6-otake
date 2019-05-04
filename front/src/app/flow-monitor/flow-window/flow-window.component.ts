import { Component, OnInit, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';
import { Step } from '../flow-step/step';
import { STEP_LIST } from './step.data';

@Component({
  selector: 'app-flow-window',
  templateUrl: './flow-window.component.html',
  styleUrls: ['./flow-window.component.scss']
})
export class FlowWindowComponent implements OnInit {

  @Output() windowStateEvent = new EventEmitter<boolean>();

  public stepList: Step[] = STEP_LIST;
  public windowState = true;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.updateWindowState(false);
    }
  }

  constructor(private eRef: ElementRef) { }

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
}
