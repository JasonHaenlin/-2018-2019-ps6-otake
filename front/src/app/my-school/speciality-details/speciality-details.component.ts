import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { enumSelector } from 'src/app/utility/utilitary-functions';
import { Section } from 'src/models/Section';
import { Speciality } from './../../../models/Speciality';
import { SPECIALITY_SECTIONS, SPECIALITY_SECTION_ICONS } from './SpecialitySections.enum';
import { SchoolService } from 'src/services/school/school.service';
import { ContractArea } from 'src/models/ContractArea';

@Component({
  selector: 'app-speciality-details',
  templateUrl: './speciality-details.component.html',
  styleUrls: ['./speciality-details.component.scss']
})
export class SpecialityDetailsComponent implements OnInit {

  public specialitySections: Section[] = [];
  public speciality$: Observable<Speciality>;
  public acordionOfContracts$: Observable<ContractArea[]>;
  public specialityShort: string;

  constructor(
    private route: ActivatedRoute,
    private schoolService: SchoolService) { }

  ngOnInit() {
    this.specialityShort = this.route.snapshot.paramMap.get('name');
    this.speciality$ = this.schoolService.getSpeciality(this.specialityShort);
    this.acordionOfContracts$ = this.schoolService.getContractsForAccordion(this.specialityShort);
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
