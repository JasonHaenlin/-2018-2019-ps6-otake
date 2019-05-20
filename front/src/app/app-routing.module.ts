import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contacts/contact-page/contact-page.component';
import { FinancialAidPageComponent } from './financial-aid-page/financial-aid-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchUniversityComponent } from './outlets/search-university/search-university.component';
import { SelectMajorComponent } from './outlets/select-major/select-major.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestimonialPageComponent } from './testimonial/testimonial-page/testimonial-page.component';


const routes: Routes = [
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: 'search-university',
    component: SearchUniversityComponent,
    outlet: 'popup'
  },
  {
    path: 'select-major',
    component: SelectMajorComponent,
    outlet: 'popup'
  },
  { path: 'home', component: HomePageComponent },
  {
    path: 'school',
    loadChildren: './my-school/my-school.module#MySchoolModule'
  },
  {
    path: 'exchange-universities',
    loadChildren: './exchange-universities/university.module#UniversityModule'
  },
  { path: 'testimonials', component: TestimonialPageComponent },
  { path: 'financial-aids', component: FinancialAidPageComponent },
  { path: 'calendar', component: PageNotFoundComponent },
  { path: 'contacts', component: ContactPageComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
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
    }),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
