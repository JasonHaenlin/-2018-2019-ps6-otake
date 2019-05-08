import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UniversityDetailsGuard } from './university-details/university-details.guard';
import { UniversityDetailsResolver } from './university-details/university-details.resolver';
import { UniversityPageComponent } from './university-page/university-page.component';

const routes: Routes = [
  { path: '', component: UniversityPageComponent },
  {
    path: 'details/:id',
    component: UniversityDetailsComponent,
    canActivate: [UniversityDetailsGuard],
    resolve: { university: UniversityDetailsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityRoutingModule { }
