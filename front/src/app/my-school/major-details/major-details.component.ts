import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from 'src/models/Course';
import { Major } from 'src/models/Major';
import { SpecialityCard } from 'src/models/SpecialityCard';
import { SchoolService } from 'src/services/school/school.service';

@Component({
  selector: 'app-major-details',
  templateUrl: './major-details.component.html',
  styleUrls: ['./major-details.component.scss']
})
export class MajorDetailsComponent implements OnInit {

  specialities$: Observable<SpecialityCard[]>;
  major$: Observable<Major>;
  s7$: Observable<Course[]>;
  s8$: Observable<Course[]>;

  constructor(private schoolService: SchoolService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(v => {
      this.specialities$ = this.schoolService.getSpecialities(v.major);
      this.major$ = this.schoolService.getMajorByShorthand(v.major);
      this.s7$ = this.schoolService.getCoursesOfMajorForThisSemester(v.major, 'S7');
      this.s8$ = this.schoolService.getCoursesOfMajorForThisSemester(v.major, 'S8');
    });
  }

}
