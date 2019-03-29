import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Section } from 'src/models/Section';
import { SPECIALITY_SECTIONS, SPECIALITY_SECTION_ICONS } from './SpecialitySections.enum';
import { enumSelector } from 'src/app/utility/utilitary-functions';
import { Speciality } from 'src/models/Speciality';
import { SpecialityService } from 'src/services/speciality/speciality.service';

@Component({
  selector: 'app-speciality-details',
  templateUrl: './speciality-details.component.html',
  styleUrls: ['./speciality-details.component.scss']
})
export class SpecialityDetailsComponent implements OnInit {
  sub: any;
  name: string;
  public speciality: Speciality;
  public specialitySections: Section[] = [];

  constructor(
    private route: ActivatedRoute,
    private specialityService: SpecialityService,
    ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
    });
    this.specialityService.getSpeciality(this.name).subscribe(s => this.speciality = s);
    this.fillSectionContent();
  }

  getSectionText(sectionName: string): string {
    switch (sectionName) {
      case 'presentation': return this.speciality.description;
    }
  }

  fillSectionContent() {
    enumSelector(SPECIALITY_SECTIONS).forEach(obj => {
      this.specialitySections.push(<Section>{ id: obj.title, name: obj.value, icon: SPECIALITY_SECTION_ICONS[obj.title] });
    });
  }

}
