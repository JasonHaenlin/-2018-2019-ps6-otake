import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const LOCAL_STORAGE = 'PNS-Flow-State';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  private notifiedOfUpdate: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public get updates(): Observable<boolean> { return this.notifiedOfUpdate; }

  constructor() { }

  public initStep(stepId: number, len: number) {
    const lastSession = this.readStep(stepId);
    if (lastSession && lastSession.length === +len) { return lastSession; }
    for (let i = 0; i < len; i++) {
      this.writeStep(stepId, i, false);
    }
    return [];
  }

  public writeStep(stepId: number, id: number, state: boolean): void {
    const step = this.readStep(stepId);
    step[id] = state;
    this.write(stepId, step);
  }

  private write(stepId: number, step: boolean[]) {
    localStorage.setItem(LOCAL_STORAGE + stepId, JSON.stringify(step));
  }

  public writeStepInCascade(lastStep: number, id: number, state: boolean): void {
    let step: boolean[];
    for (let i = 1; i <= lastStep; i++) {
      step = this.readStep(i);
      for (let j = 0; j < step.length; j++) {
        step[j] = true;
        if (i === lastStep && j === id) { break; }
      }
      this.write(i, step);
    }
    this.notifiedOfUpdate.next(true);
  }

  public readStep(key: number | string): boolean[] {
    const bigStep = JSON.parse(localStorage.getItem(LOCAL_STORAGE + key));
    return bigStep ? bigStep : [];
  }
}
