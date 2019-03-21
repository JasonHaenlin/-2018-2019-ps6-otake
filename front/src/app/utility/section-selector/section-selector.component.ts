import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UniversitySection, SpecialitySection } from 'src/models/sections.enum';
import { Section } from 'src/models/Section';

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit {

  // @Input()
  // sectionName: string;

  @Input()
  sectionList: Section[];

  public activeRoute: string = this.route.snapshot.url.toString().replace(',', '/');
  public sections;

  constructor(private route: ActivatedRoute
    ) { }

  ngOnInit() {
    
  }

  // selectSection(s: string) {
  //   this.section = s;
  //   console.log('selected:', s);
  // }
  // enumSelector(definition) {
  //   return Object.keys(definition)
  //     .map(key => ({ value: definition[key], title: key }));
  // }

}
