import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlowMonitorService {

  private flowStarted$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  getFlowUpdate(): Observable<boolean> {
    return this.flowStarted$;
  }

  startFlow() {
    this.flowStarted$.next(true);
  }

}
