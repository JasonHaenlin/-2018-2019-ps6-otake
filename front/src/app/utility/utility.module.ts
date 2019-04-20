import { LoaderComponent } from './loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSelectorComponent } from './section-selector/section-selector.component';
import { RouterModule } from '@angular/router';
import { LoaderService } from './loader/loader.service';
import { AccordionComponent } from './accordion/accordion.component';
import { DeadlineComponent } from './deadline/deadline.component';
import { CoursesHolderComponent } from './courses-holder/courses-holder.component';

@NgModule({
  declarations: [
    SectionSelectorComponent,
    LoaderComponent,
    AccordionComponent,
    DeadlineComponent,
    CoursesHolderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SectionSelectorComponent,
    LoaderComponent,
    AccordionComponent,
    DeadlineComponent,
    CoursesHolderComponent
  ],
  providers: [
    LoaderService,
  ]
})
export class UtilityModule { }
