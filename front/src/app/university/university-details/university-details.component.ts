import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';
import { University } from 'src/models/university';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Section } from 'src/models/section';
import { DetailsService } from 'src/services/details/details.service';
import { UNIVERSITY_SECTIONS } from './university.sections.enum';
import { SectionSelectorComponent } from 'src/app/utility/section-selector/section-selector.component';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  public university: University;
  public universitySections: Section[] = [];
  // public sectionList: Section[] = [{id: 'presentation', name: 'Présentation', icon: 'fas fa-info'},
  //   {id: 'admission', name: 'Admission/contrat', icon: 'fas fa-file-contract'},
  //   {id: 'studentLife', name: 'Vie étudiante', icon: 'fas fa-graduation-cap'},
  //   {id: 'costOfLife', name: 'Coût de la vie', icon: 'fas fa-money-bill-alt'},
  //   {id: 'advice', name: 'Avis', icon: 'fas fa-users'}];

  constructor(
    private universityService: UniversityService,
    private detailsService: DetailsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.universityService.getUniversity(this.route.snapshot.paramMap.get('name')).subscribe(uni => this.university = uni);
    this.detailsService.enumSelector(UNIVERSITY_SECTIONS).forEach(obj => {
      this.universitySections.push(<Section>{ id: obj.title, name: obj.value });
    });
    // this.universitySections.forEach(e => console.log(`element:`, e.id, e.name));
  }

  getSectionText(sectionName: string): string {
    switch (sectionName) {
      case 'presentation': return this.university.presentation_text;
      case 'admission': return this.university.admission_text;
      case 'student': return this.university.student_life_text;
      case 'cost': return this.university.cost_of_living_text;
    }
  }


}
