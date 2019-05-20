import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { AdminRoutingModule } from './admin-routing.module';
import { httpInterceptorProviders } from 'src/core/http-interceptor';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    ManageTestimonialComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class AdminModule { }
