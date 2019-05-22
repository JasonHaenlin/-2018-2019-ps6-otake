import { LoaderComponent } from './loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSelectorComponent } from './section-selector/section-selector.component';
import { RouterModule } from '@angular/router';
import { LoaderService } from './loader/loader.service';
import { AccordionComponent } from './accordion/accordion.component';
import { DeadlineComponent } from './deadline/deadline.component';
import { CoursesHolderComponent } from './courses-holder/courses-holder.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { FormButtonComponent } from './components/form-button/form-button.component';

@NgModule({
  declarations: [
    SectionSelectorComponent,
    LoaderComponent,
    AccordionComponent,
    DeadlineComponent,
    CoursesHolderComponent,
    SearchBoxComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormButtonComponent,
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
  ],
  exports: [
    SectionSelectorComponent,
    LoaderComponent,
    AccordionComponent,
    DeadlineComponent,
    CoursesHolderComponent,
    SearchBoxComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormButtonComponent,
  ],
  providers: [
    LoaderService,
  ]
})
export class UtilityModule { }
