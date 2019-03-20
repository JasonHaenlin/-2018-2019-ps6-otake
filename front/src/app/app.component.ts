
import { Component } from '@angular/core';
import { FlowMonitorService } from 'src/services/flow/flow-monitor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flowInAction = false;

  constructor(private flowService: FlowMonitorService) {
    this.flowService.getFlowControl().subscribe(f => this.flowInAction = f);
  }

}
