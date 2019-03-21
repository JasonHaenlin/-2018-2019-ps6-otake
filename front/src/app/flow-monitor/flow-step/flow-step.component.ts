import { Step } from './step';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flow-step',
  templateUrl: './flow-step.component.html',
  styleUrls: ['./flow-step.component.scss']
})
export class FlowStepComponent implements OnInit {

  @Input() public stage: Step;

  private nbOfChecked = 0;
  public isDone = false;

  constructor() { }

  ngOnInit() { }

  onChangeCategory(isChecked: boolean) {
    isChecked ? this.nbOfChecked++ : this.nbOfChecked--;
    if (this.nbOfChecked === this.stage.text.length) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }
}
