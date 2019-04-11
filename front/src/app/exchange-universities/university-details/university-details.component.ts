import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';
import { UniversityDetails } from 'src/models/UniversityDetails';
import { ActivatedRoute } from '@angular/router';
import { Section } from 'src/models/Section';
import { UNIVERSITY_SECTIONS, UNIVERSITY_SECTION_ICONS } from './UniversitySections.enum';
import { enumSelector } from 'src/app/utility/utilitary-functions';
import { Testimonial } from 'src/models/Testimonial';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.scss']
})
export class UniversityDetailsComponent implements OnInit {

  public university$: Observable<UniversityDetails>;
  public universitySections: Section[] = [];
  public adviceList: Testimonial[] = [];

  constructor(
    private universityService: UniversityService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    console.log('ng init details !');
    this.university$ = this.universityService.getUniversityDetails(this.route.snapshot.paramMap.get('name'));
    this.fillSectionContent();
  }

  fillSectionContent() {
    enumSelector(UNIVERSITY_SECTIONS).forEach(obj => {
      this.universitySections.push(<Section>{ id: obj.title, name: obj.value, icon: UNIVERSITY_SECTION_ICONS[obj.title] });
    });
  }

}
