import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSelectorComponent } from './section-selector/section-selector.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SectionSelectorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SectionSelectorComponent,
  ]
})
export class UtilityModule { }
