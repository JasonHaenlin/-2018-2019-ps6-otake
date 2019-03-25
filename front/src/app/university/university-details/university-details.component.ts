import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';
import { University } from 'src/models/University';
import { ActivatedRoute } from '@angular/router';
import { Section } from 'src/models/Section';
import { DetailsService } from 'src/services/details/details.service';
import { UNIVERSITY_SECTIONS, UNIVERSITY_SECTION_ICONS } from './UniversitySections.enum';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  public university: University;
  public universitySections: Section[] = [];

  constructor(
    private universityService: UniversityService,
    private detailsService: DetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('ng init details !');
    this.universityService.getUniversity(this.route.snapshot.paramMap.get('name')).subscribe(uni => this.university = uni);
    this.fillSectionContent();
  }

  getSectionText(sectionName: string): string {
    switch (sectionName) {
      case 'presentation': return this.university.presentation_text;
      case 'admission': return this.university.admission_text;
      case 'student': return this.university.student_life_text;
      case 'cost': return this.university.cost_of_living_text;
    }
  }

  fillSectionContent() {
    this.detailsService.enumSelector(UNIVERSITY_SECTIONS).forEach(obj => {
      this.universitySections.push(<Section>{ id: obj.title, name: obj.value, icon: UNIVERSITY_SECTION_ICONS[obj.title] });
    });
  }

}
