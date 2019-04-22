import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { enumSelector } from 'src/app/utility/utilitary-functions';
import { Section } from 'src/models/Section';
import { UniversityDetails } from 'src/models/UniversityDetails';
import { UniversityService } from 'src/services/university/university.service';
import { UNIVERSITY_SECTIONS, UNIVERSITY_SECTION_ICONS } from './UniversitySections.enum';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  public university$: Observable<UniversityDetails>;
  public universitySections: Section[] = [];

  constructor(
    private universityService: UniversityService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.university$ = this.universityService.getUniversityDetails(this.route.snapshot.paramMap.get('name'));
    this.fillSectionContent();
  }

  fillSectionContent() {
    enumSelector(UNIVERSITY_SECTIONS).forEach(obj => {
      this.universitySections.push(<Section>{ id: obj.title, name: obj.value, icon: UNIVERSITY_SECTION_ICONS[obj.title] });
    });
  }

}
