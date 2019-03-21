import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flow-window',
  templateUrl: './flow-window.component.html',
  styleUrls: ['./flow-window.component.scss']
})
export class FlowWindowComponent implements OnInit {

  public windowState = true;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    console.log(event.target);
    console.log(this.eRef.nativeElement);

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
