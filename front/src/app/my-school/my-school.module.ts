import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySchoolRoutingModule } from './my-school-routing.module';
import { MajorDetailsComponent } from './major-details/major-details.component';
import { SpecialityDetailsComponent } from './speciality-details/speciality-details.component';
import { UtilityModule } from '../utility/utility.module';
import { SpecialityCardComponent } from './speciality-card/speciality-card.component';
import { AccordionComponent } from './accordion/accordion.component';

@NgModule({
  declarations: [
    SpecialityCardComponent,
    MajorDetailsComponent,
    SpecialityDetailsComponent,
    AccordionComponent
  ],
  imports: [
    MySchoolRoutingModule,
    UtilityModule,
    CommonModule,
  ]
})
export class MySchoolModule { }
