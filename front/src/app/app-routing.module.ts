import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { UniversityListComponent } from './exchange-universities/university-list/university-list.component';
import { UniversityDetailsComponent } from './exchange-universities/university-details/university-details.component';
import { MajorDetailsComponent } from './my-school/major-details/major-details.component';
import { SpecialityDetailsComponent } from './my-school/speciality-details/speciality-details.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageNotFoundComponent },
  { path: 'school/:major', component: MajorDetailsComponent,
    children: [
      {path: 'speciality/:name', component: SpecialityDetailsComponent}
    ]
  },
  {
    path: 'exchange-universities', component: UniversityListComponent,
    children: [
      { path: 'details/:name', component: UniversityDetailsComponent },
    ]
  },
  { path: 'testimonials', component: PageNotFoundComponent },
  { path: 'financial-aids', component: PageNotFoundComponent },
  { path: 'calendar', component: PageNotFoundComponent },
  { path: 'contacts', component: PageNotFoundComponent },
  // catch all the other routes
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      scrollOffset: [0, 75], // [x, y]
      preloadingStrategy: PreloadAllModules
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UniversityDetailsComponent, UniversityListComponent, PageNotFoundComponent];
