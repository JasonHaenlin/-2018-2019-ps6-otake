import { Component, OnInit } from '@angular/core';
import { UniversityCard } from '../../../models/University';
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

  constructor(private route: ActivatedRoute,
    public universityService: UniversityService) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParamMap.get('destination'));

    this.universityList$ = this.universityService.getUniversities();
  }

}
