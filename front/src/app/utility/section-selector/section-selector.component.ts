import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Section } from 'src/models/section';

@Component({
  selector: 'app-section-selector',
  templateUrl: './section-selector.component.html',
  styleUrls: ['./section-selector.component.scss']
})

export class SectionSelectorComponent implements OnInit {

  @Input()
  sectionList: Section[];

  public activeRoute: string = this.route.snapshot.url.toString().replace(',', '/');

  constructor(private route: ActivatedRoute
    ) { }

  ngOnInit() {  }

}
