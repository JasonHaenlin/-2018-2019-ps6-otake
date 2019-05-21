import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilityModule } from './../utility/utility.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { ManageBoardComponent } from './manage-board/manage-board.component';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    ManageTestimonialComponent,
    ManageBoardComponent
  ],
  imports: [
    UtilityModule,
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
