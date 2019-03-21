import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

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
