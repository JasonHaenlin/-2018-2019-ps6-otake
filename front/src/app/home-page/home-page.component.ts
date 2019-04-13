import { Deadline } from './../../models/Deadline';
import { DEADLINE_MOCK } from './../../mocks/Deadline.mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public deadlineList: Deadline[] = DEADLINE_MOCK;

  constructor() { }

  ngOnInit() {
  }

}
