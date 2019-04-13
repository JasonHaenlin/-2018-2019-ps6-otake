import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UniversityCardComponent } from './university-card/university-card.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityRoutingModule } from './university-routing.module';
import { UniversityComponent } from './university/university.component';
import { UtilityModule } from '../utility/utility.module';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { UniversityFilterComponent } from './university-filter/university-filter.component';
import { UniversityPageComponent } from './university-page/university-page.component';

@NgModule({
  declarations: [
    UniversityComponent,
    UniversityCardComponent,
    UniversityDetailsComponent,
    UniversityListComponent,
    TestimonialComponent,
    UniversityFilterComponent,
    UniversityPageComponent,
  ],
  imports: [
    UniversityRoutingModule,
    UtilityModule,
    CommonModule,
  ]
})
export class UniversityModule { }
