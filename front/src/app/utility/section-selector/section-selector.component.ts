import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})
export class SectionSelectorComponent implements OnInit {

  @Input()
  sectionList: string[];

  @Input()
  section: string;

  @Output()
  sectionSelected:  EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  selectSection(s: string) {
    this.section = s;
    console.log(this.sectionSelected);
  }

}
