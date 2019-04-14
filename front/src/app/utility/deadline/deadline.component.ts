import { Deadline } from './../../../models/Deadline';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deadline',
  templateUrl: './deadline.component.html',
  styleUrls: ['./deadline.component.scss']
})
export class DeadlineComponent implements OnInit {

  @Input() deadline: Deadline;

  public timeBeforeEnd = 0;
  public watchColor = '#628eda';

  constructor() { }

  ngOnInit() {
    this.countdown();
  }

  private countdown() {
    const d = new Date(this.deadline.date).getTime() - new Date().getTime();
    this.timeBeforeEnd = Math.floor(d / (1000 * 60 * 60 * 24));
    if (this.timeBeforeEnd < 0) {
      this.timeBeforeEnd = 0;
      this.watchColor = '#d77979';
    }
  }
}
