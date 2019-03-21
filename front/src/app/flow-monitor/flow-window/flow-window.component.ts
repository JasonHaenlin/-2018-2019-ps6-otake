import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Step } from '../flow-step/step';

@Component({
  selector: 'app-flow-window',
  templateUrl: './flow-window.component.html',
  styleUrls: ['./flow-window.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ width: 0 }),
        animate('500ms ease-in', style({ width: '*' }))
      ]),
      transition(':leave', [
        style({ width: '*' }),
        animate('500ms ease-out', style({ width: 0 }))
      ])
    ]),
  ]
})
export class FlowWindowComponent implements OnInit {

  public windowState = true;
  public stepList: Step[] = [];

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
