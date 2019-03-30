import { Component, OnInit } from '@angular/core';
import { UniversityCard } from '../../../models/UniversityCard';
import { UniversityService } from '../../../services/university/university.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  public universityList$: Observable<UniversityCard[]>;

  constructor(public universityService: UniversityService) { }

  ngOnInit() {
    this.universityList$ = this.universityService.getUniversities();
  }

}
