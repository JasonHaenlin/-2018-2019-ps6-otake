
import { Component } from '@angular/core';
import { FlowMonitorService } from 'src/services/flow/flow-monitor.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({ width: 0 }),
        animate('500ms ease-in', style({ width: '*' }))
      ]),
      transition(':leave', [
        style({ width: '*' }),
        animate('500ms ease-out', style({ width: 0 }))
      ])
    ]),
  ]
})
export class AppComponent {

  public flowInAction = false;

  constructor(private flowService: FlowMonitorService) {
    this.flowService.getFlowUpdate().subscribe(f => this.flowInAction = f);
  }

}
