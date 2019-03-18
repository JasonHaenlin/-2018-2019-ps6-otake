import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';
import { Observable } from 'rxjs';
import { University } from 'src/models/university';

@Component({
  selector: 'app-university-content',
  templateUrl: './university-content.component.html',
  styleUrls: ['./university-content.component.scss']
})
export class UniversityContentComponent implements OnInit {

  public university$: Observable<University>;
  public university: University;

  constructor(private universityService: UniversityService) { 
  }

  ngOnInit() {
    this.university$ = this.universityService.getUniversity(0);
    this.university$.subscribe(u => this.university = u);
  }

}
