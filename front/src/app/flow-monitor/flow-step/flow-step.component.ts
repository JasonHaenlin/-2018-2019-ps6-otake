import { Component, Input, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FlowService } from './../flow.service';
import { Step, TextDetail } from './step';

@Component({
  selector: 'app-flow-step',
  templateUrl: './flow-step.component.html',
  styleUrls: ['./flow-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowStepComponent implements OnInit {

  @Input() public stage: Step;

  @Output() public linkClickedEvent = new EventEmitter<any>();

  private nbOfChecked: number;
  public isDone = false;

  constructor(private flowService: FlowService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.initCheckbox();
    this.flowService.updates.subscribe(() => this.initCheckbox());
  }

  private initCheckbox() {
    const initStep = this.flowService.initStep(this.stage.id, this.stage.description.length);
    this.nbOfChecked = 0;
    for (let i = 0; i < initStep.length; i++) {
      this.stage.description[i].done = initStep[i];
      if (initStep[i]) { this.nbOfChecked++; }
    }
    this.checkStepValidation();
    this.refresh();
  }

  onChangeStep(id: number, isChecked: boolean) {
    isChecked ? this.nbOfChecked++ : this.nbOfChecked--;
    this.flowService.writeStep(this.stage.id, id, isChecked);
    this.stage.description[id].done = isChecked;
    this.checkStepValidation();
  }

  updateCheckbox(step: TextDetail) {
    this.flowService.writeStepInCascade(this.stage.id, step.id, true);
    this.linkClickedEvent.emit();
  }

  private checkStepValidation() {
    if (this.nbOfChecked === this.stage.description.length) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }

  private refresh() { this.cd.detectChanges(); }
}
