import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { TestimonialFormComponent } from './testimonial-form/testimonial-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'testimonials',
    component: TestimonialFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackOfficeRoutingModule { }
