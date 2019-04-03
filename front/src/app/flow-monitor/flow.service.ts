import { Injectable } from '@angular/core';

const LOCAL_STORAGE = 'PNS-Flow-State';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

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
    localStorage.setItem(LOCAL_STORAGE + stepId, JSON.stringify(step));
  }

  public readStep(key: number | string): boolean[] {
    const bigStep = JSON.parse(localStorage.getItem(LOCAL_STORAGE + key));
    return bigStep ? bigStep : [];
  }
}
