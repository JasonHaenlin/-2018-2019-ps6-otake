import { TestimonialListComponent } from './testimonial-list/testimonial-list.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TestimonialCardComponent,
    TestimonialListComponent,
    TestimonialPageComponent,
    TestimonialFormComponent,
  ],
  exports: [
    TestimonialCardComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule

  ]
})
export class TestimonialModule { }
