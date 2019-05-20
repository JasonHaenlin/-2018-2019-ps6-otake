import { ManageBoardComponent } from './manage-board/manage-board.component';
import { AuthGuard } from './auth.guard';
import { ManageTestimonialComponent } from './manage-testimonial/manage-testimonial.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'board',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'manage',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'testimonial', component: ManageTestimonialComponent },
          { path: 'overview', component: ManageBoardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
