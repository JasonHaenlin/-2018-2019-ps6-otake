import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';

const routes: Routes = [
  { path: '', component: UniversityListComponent },
  { path: 'details/:name', component: UniversityDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
