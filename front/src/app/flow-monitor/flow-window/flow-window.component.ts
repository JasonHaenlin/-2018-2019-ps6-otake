import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-window',
  templateUrl: './flow-window.component.html',
  styleUrls: ['./flow-window.component.scss']
})
export class FlowWindowComponent implements OnInit {

  public windowState = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.windowState = true;
    }, 100);
  }

  updateWindowState() {
    this.windowState = !this.windowState;
  }

}
