import { Step } from './step';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-step',
  templateUrl: './flow-step.component.html',
  styleUrls: ['./flow-step.component.scss']
})
export class FlowStepComponent implements OnInit {

  @Input() public stage: Step[];

  constructor() { }

  ngOnInit() {
    console.log(this.stage);

  }

}
