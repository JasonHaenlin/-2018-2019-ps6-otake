import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';

@NgModule({
  declarations: [LoginComponent, TestimonialFormComponent],
  imports: [
    CommonModule
  ]
})
export class BackOfficeModule { }
