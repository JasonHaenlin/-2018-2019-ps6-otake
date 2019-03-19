import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { UniversityContentComponent } from './university/university-content/university-content.component';


const routes: Routes = [

  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'exchangeUniversityDetails/:id', component: UniversityContentComponent},
  { path: 'home', component: PageNotFoundComponent },
  { path: 'school', component: PageNotFoundComponent },
  { path: 'exchangesUniversities', component: PageNotFoundComponent },
  { path: 'testimonials', component: PageNotFoundComponent },
  { path: 'financialAids', component: PageNotFoundComponent },
  { path: 'calendar', component: PageNotFoundComponent },
  { path: 'contacts', component: PageNotFoundComponent },
  // catch all the other routes
  // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
