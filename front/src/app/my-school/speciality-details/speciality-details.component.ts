import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { enumSelector } from 'src/app/utility/utilitary-functions';
import { GeographicalArea } from 'src/models/GeographicalArea';
import { Section } from 'src/models/Section';
import { UniversityService } from 'src/services/university/university.service';
import { Speciality } from './../../../models/Speciality';
import { SPECIALITY_SECTIONS, SPECIALITY_SECTION_ICONS } from './SpecialitySections.enum';
import { SchoolService } from 'src/services/school/school.service';

@Component({
  selector: 'app-speciality-details',
  templateUrl: './speciality-details.component.html',
  styleUrls: ['./speciality-details.component.scss']
})
export class SpecialityDetailsComponent implements OnInit {

  public specialitySections: Section[] = [];
  public speciality$: Observable<Speciality>;
  public geographicalArea$: Observable<GeographicalArea[]>;

  constructor(
    private route: ActivatedRoute,
    // private specialityService: SpecialityService,
    private schoolService: SchoolService,
    private universityService: UniversityService) { }

  ngOnInit() {
    this.speciality$ = this.schoolService.getSpeciality(this.route.snapshot.paramMap.get('name'));
    this.geographicalArea$ = this.universityService.getAreas();
    this.fillSectionContent();
  }

  fillSectionContent() {
    enumSelector(SPECIALITY_SECTIONS).forEach(obj => {
      this.specialitySections.push(<Section>{ id: obj.title, name: obj.value, icon: SPECIALITY_SECTION_ICONS[obj.title] });
    });
  }

  toArray(topics: string) {
    return topics.split(',');
  }

}
