import { TestimonialListComponent } from './testimonial-list/testimonial-list.component';
import { TestimonialCardComponent } from './testimonial-card/testimonial-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';

@NgModule({
  declarations: [
    TestimonialCardComponent,
    TestimonialListComponent,
    TestimonialPageComponent,
  ],
  exports: [
    TestimonialCardComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class TestimonialModule { }
