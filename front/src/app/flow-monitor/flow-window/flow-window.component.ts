import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Step } from '../flow-step/step';
import { STEP_LIST } from './step.data';

@Component({
  selector: 'app-flow-window',
  templateUrl: './flow-window.component.html',
  styleUrls: ['./flow-window.component.scss']
})
export class FlowWindowComponent implements OnInit {

  public windowState = true;
  public stepList: Step[] = STEP_LIST;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.windowState = true;
    } else {
      this.windowState = false;
    }
  }
  constructor(private eRef: ElementRef) { }

  ngOnInit() {
  }

  updateWindowState() {
    this.windowState = !this.windowState;
  }

}
