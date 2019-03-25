import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MajorDetailsComponent } from './my-school/major-details/major-details.component';
import { SpecialityDetailsComponent } from './my-school/speciality-details/speciality-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UniversityModule } from './exchange-universities/university.module';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageNotFoundComponent },
  {
    path: 'school/:major', component: MajorDetailsComponent,
    children: [
      { path: 'speciality/:name', component: SpecialityDetailsComponent }
    ]
  },
  { path: 'exchange-universities', loadChildren: () => UniversityModule },
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
