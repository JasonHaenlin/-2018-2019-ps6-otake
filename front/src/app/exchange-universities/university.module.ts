import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestimonialModule } from '../testimonial/testimonial.module';
import { UtilityModule } from '../utility/utility.module';
import { UniversityCardComponent } from './university-card/university-card.component';
import { UniversityDetailsComponent } from './university-details/university-details.component';
import { UniversityFilterComponent } from './university-filter/university-filter.component';
import { UniversityListComponent } from './university-list/university-list.component';
import { UniversityPageComponent } from './university-page/university-page.component';
import { UniversityRoutingModule } from './university-routing.module';

@NgModule({
  declarations: [
    UniversityCardComponent,
    UniversityDetailsComponent,
    UniversityListComponent,
    UniversityFilterComponent,
    UniversityPageComponent,
  ],
  imports: [
    UniversityRoutingModule,
    TestimonialModule,
    UtilityModule,
    CommonModule,
  ]
})
export class UniversityModule { }
