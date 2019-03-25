import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { UniversityDetailsComponent } from './university/university-details/university-details.component';
import { UniversityListComponent } from './university/university-list/university-list.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: PageNotFoundComponent },
  { path: 'school', component: PageNotFoundComponent },
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
