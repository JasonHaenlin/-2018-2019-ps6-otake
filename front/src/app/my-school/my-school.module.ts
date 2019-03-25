import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MySchoolRoutingModule } from './my-school-routing.module';
import { MajorDetailsComponent } from './major-details/major-details.component';
import { SpecialityDetailsComponent } from './speciality-details/speciality-details.component';
import { MySchoolComponent } from './my-school/my-school.component';

@NgModule({
  declarations: [
    MySchoolComponent,
    MajorDetailsComponent,
    SpecialityDetailsComponent,
  ],
  imports: [
    CommonModule,
    MySchoolRoutingModule
  ]
})
export class MySchoolModule { }
