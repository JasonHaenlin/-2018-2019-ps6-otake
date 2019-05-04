import { FlowService } from './flow.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlowPageComponent } from './flow-page/flow-page.component';
import { FlowStarterComponent } from './flow-starter/flow-starter.component';
import { FlowStepComponent } from './flow-step/flow-step.component';
import { FlowWindowComponent } from './flow-window/flow-window.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FlowWindowComponent,
    FlowPageComponent,
    FlowStepComponent,
    FlowStarterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    FlowService,
  ],
  exports: [
    FlowPageComponent,
  ]
})
export class FlowMonitorModule { }
