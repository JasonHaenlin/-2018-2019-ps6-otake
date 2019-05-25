import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormTextareaComponent } from './components/form-textarea/form-textarea.component';
import { CoursesHolderComponent } from './courses-holder/courses-holder.component';
import { DeadlineComponent } from './deadline/deadline.component';
import { LoaderComponent } from './loader';
import { LoaderService } from './loader/loader.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SectionSelectorComponent } from './section-selector/section-selector.component';

@NgModule({
  declarations: [
    SectionSelectorComponent,
    LoaderComponent,
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
