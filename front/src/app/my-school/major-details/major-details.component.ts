import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/services/school/school.service';
import { Observable } from 'rxjs';
import { SpecialityCard } from 'src/models/SpecialityCard';
import { Major } from 'src/models/Major';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-major-details',
  templateUrl: './major-details.component.html',
  styleUrls: ['./major-details.component.scss']
})
export class MajorDetailsComponent implements OnInit {

  specialities$: Observable<SpecialityCard[]>;
  major$: Observable<Major>;

  constructor(private schoolService: SchoolService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(v => {
      this.specialities$ = this.schoolService.getSpecialitiesOf(v.major);
      this.major$ = this.schoolService.getMajorByShorthand(v.major);
    });
   }

}
