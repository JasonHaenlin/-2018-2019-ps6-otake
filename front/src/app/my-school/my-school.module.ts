import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySchoolRoutingModule } from './my-school-routing.module';
import { MajorDetailsComponent } from './major-details/major-details.component';
import { SpecialityDetailsComponent } from './speciality-details/speciality-details.component';
import { MySchoolComponent } from './my-school/my-school.component';
import { UtilityModule } from '../utility/utility.module';

@NgModule({
  declarations: [
    MySchoolComponent,
    MajorDetailsComponent,
    SpecialityDetailsComponent,
  ],
  imports: [
    MySchoolRoutingModule,
    UtilityModule,
    CommonModule,
  ]
})
export class MySchoolModule { }
