import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [LoginComponent, AdminComponent],
  imports: [
    AdminRoutingModule,
    CommonModule
  ]
})
export class AdminModule { }
