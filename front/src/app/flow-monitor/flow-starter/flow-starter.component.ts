import { FlowMonitorService } from './../../../services/flow/flow-monitor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flow-starter',
  templateUrl: './flow-starter.component.html',
  styleUrls: ['./flow-starter.component.scss']
})
export class FlowStarterComponent implements OnInit {

  constructor(private flowService: FlowMonitorService) { }

  ngOnInit() {
  }

  startFlow() {
    console.log('event');

    this.flowService.startFlow();
  }

}
