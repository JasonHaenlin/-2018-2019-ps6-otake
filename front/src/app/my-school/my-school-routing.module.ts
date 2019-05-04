import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajorDetailsComponent } from './major-details/major-details.component';
import { SpecialityDetailsComponent } from './speciality-details/speciality-details.component';
import { SpecialityDetailsResolver } from './speciality-details/speciality-details.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: ':major', children: [
      { path: '', component: MajorDetailsComponent },
      {
        path: ':name',
        component: SpecialityDetailsComponent,
        resolve: { speciality: SpecialityDetailsResolver }
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MySchoolRoutingModule { }
