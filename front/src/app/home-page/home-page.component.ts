import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Deadline } from './../../models/Deadline';
import { SchoolService } from 'src/services/school/school.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public deadlineList$: Observable<Deadline[]>;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.deadlineList$ = this.schoolService.getdeadlines(this.defineSchoolYears());
  }

  private defineSchoolYears() {
    const currentDate = new Date();
    let admissionYear = currentDate.getFullYear();
    if (currentDate.getMonth() < 8) { admissionYear--; }
    return admissionYear;
  }

}
