import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from 'src/models/Section';

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})

export class SectionSelectorComponent implements OnInit {

  @Input() sectionList: Section[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() { }

}
