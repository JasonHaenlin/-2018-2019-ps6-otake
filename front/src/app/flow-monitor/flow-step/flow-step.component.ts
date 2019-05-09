import { Subscription } from 'rxjs';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FlowService } from './../flow.service';
import { Step, TextDetail } from './step';

@Component({
  selector: 'app-flow-step',
  templateUrl: './flow-step.component.html',
  styleUrls: ['./flow-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlowStepComponent implements OnInit, OnDestroy {

  @Input() public stage: Step;

  @Output() public linkClickedEvent = new EventEmitter<any>();

  private nbOfChecked: number;
  public isDone = false;
  public sub: Subscription;

  constructor(private flowService: FlowService,
    private cdRef: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    this.initCheckbox();
    this.sub = this.flowService.updates.subscribe(() => this.initCheckbox());
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

  onChangeStep(step: TextDetail, isChecked: boolean) {
    if (!isChecked) {
      this.nbOfChecked--;
      this.flowService.writeStep(this.stage.id, step.id, isChecked);
      this.stage.description[step.id].done = isChecked;
      this.checkStepValidation();
    } else {
      this.flowService.writeStepInCascade(this.stage.id, step.id, isChecked);
    }
  }

  redirectRoute(link: string, fragment?: string) {
    this.linkClickedEvent.emit();
    setTimeout(() => this.router.navigate([link], { fragment: fragment }), 1000);
  }

  private checkStepValidation() {
    if (this.nbOfChecked === this.stage.description.length) {
      this.isDone = true;
    } else {
      this.isDone = false;
    }
  }

  private refresh() { this.cdRef.detectChanges(); }
}
