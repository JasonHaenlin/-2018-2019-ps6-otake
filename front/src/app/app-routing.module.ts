import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailContentComponent } from './university/detail-content/detail-content.component';


const routes: Routes = [

  { path: '', redirectTo: '/universite', pathMatch: 'full' },

  { path: 'universite', component: DetailContentComponent},
  { path: 'home', component: PageNotFoundComponent },
  { path: 'school', component: PageNotFoundComponent },
  { path: 'exchangesUniversities', component: PageNotFoundComponent },
  { path: 'testimonials', component: PageNotFoundComponent },
  { path: 'financialAids', component: PageNotFoundComponent },
  { path: 'calendar', component: PageNotFoundComponent },
  { path: 'contacts', component: PageNotFoundComponent },
  // catch all the other routes
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
