import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-flow-starter',
  templateUrl: './flow-starter.component.html',
  styleUrls: ['./flow-starter.component.scss']
})
export class FlowStarterComponent implements OnInit {

  @Output() updateFlow: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  startFlow() {
    this.updateFlow.emit(true);
  }

}
