import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversitySection, SpecialitySection } from 'src/models/sections.enum';

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit {

  @Input()
  sectionName: string;

  public activeRoute: string = this.route.snapshot.url.toString().replace(',', '/');
  public sections;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sections = this.enumSelector(this.sectionName === 'university' ? UniversitySection : SpecialitySection);
  }

  // selectSection(s: string) {
  //   this.section = s;
  //   console.log('selected:', s);
  // }
  enumSelector(definition) {
    return Object.keys(definition)
      .map(key => ({ value: definition[key], title: key }));
  }

}
