import { Component, OnInit } from '@angular/core';
import { UniversityCard } from '../../../models/UniversityCard';
import { UniversityService } from '../../../services/university/university.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  public universityList$: Observable<UniversityCard[]>;
  public destination: string;
  public department: string;
  public language: string;

  constructor(public universityService: UniversityService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.destination = params.destination;
      this.department = params.department;
      this.language = params.language;
    });
    const dest = this.route.snapshot.queryParamMap.get('destination');
    if (dest) {
      this.universityList$ = this.universityService.getUniversitiesByArea(dest);
    } else {
      this.universityList$ = this.universityService.getUniversities();
    }
  }

}
