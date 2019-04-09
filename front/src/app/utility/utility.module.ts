import { LoaderComponent } from './loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSelectorComponent } from './section-selector/section-selector.component';
import { RouterModule } from '@angular/router';
import { LoaderService } from './loader/loader.service';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    SectionSelectorComponent,
    LoaderComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SectionSelectorComponent,
    LoaderComponent,
    AccordionComponent
  ],
  providers: [
    LoaderService,
  ]
})
export class UtilityModule { }
