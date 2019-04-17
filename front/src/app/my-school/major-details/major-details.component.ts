import { SpecialityService } from './../../../services/speciality/speciality.service';
import { Component, OnInit } from '@angular/core';
import { SPECIALITY_MOCKED_IMAFA } from 'src/mocks/Speciality.mock';
import { SchoolService } from 'src/services/school/school.service';
import { Observable } from 'rxjs';
import { SpecialityCard } from 'src/models/SpecialityCard';
import { Major } from 'src/models/Major';

@Component({
  selector: 'app-major-details',
  templateUrl: './major-details.component.html',
  styleUrls: ['./major-details.component.scss']
})
export class MajorDetailsComponent implements OnInit {

  specialities$: Observable<SpecialityCard[]>;
  major$: Observable<Major>;

  constructor(private schoolService: SchoolService) {
    this.specialities$ = schoolService.getSpecialitiesOf('SI');
  }

  ngOnInit() { }

}
