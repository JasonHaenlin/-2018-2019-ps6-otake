import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/models/Course';

@Component({
  selector: 'app-courses-holder',
  templateUrl: './courses-holder.component.html',
  styleUrls: ['./courses-holder.component.scss']
})
export class CoursesHolderComponent implements OnInit {

  @Input()
  courses: Course[];

  @Input()
  semester: string;

  constructor() { }

  ngOnInit() {}

}
