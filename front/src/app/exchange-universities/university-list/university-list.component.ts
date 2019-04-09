import { Component, OnInit } from '@angular/core';
import { University } from '../../../models/University';
import { UniversityService } from '../../../services/university/university.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  public universityList$: Observable<University[]>;
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
    this.universityList$ = this.universityService.getUniversities(this.route.snapshot.queryParamMap.get('destination'), null, null);
  }

}
