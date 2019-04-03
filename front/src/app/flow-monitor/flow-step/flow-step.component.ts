import { FlowService } from './../flow.service';
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

  constructor(private flowService: FlowService) { }

  ngOnInit() {
    this.flowService.initStep(this.stage.id, this.stage.description.length)
      .forEach(s => {
        if (s) {
          this.nbOfChecked++;

        }
      });
    this.checkStepValidation();

  }

  onChangeStep(id: number, isChecked: boolean) {
    isChecked ? this.nbOfChecked++ : this.nbOfChecked--;
    this.flowService.writeStep(this.stage.id, id, isChecked);
    this.checkStepValidation();
  }

  private checkStepValidation() {
    if (this.nbOfChecked === this.stage.description.length) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }
}
