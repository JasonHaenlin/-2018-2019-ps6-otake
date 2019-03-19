import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-section-selection',
  templateUrl: './section-selection.component.html',
  styleUrls: ['./section-selection.component.scss']
})
export class SectionSelectionComponent implements OnInit {

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
    this.sectionSelected.emit(s);
    console.log(this.sectionSelected);
  }

}
