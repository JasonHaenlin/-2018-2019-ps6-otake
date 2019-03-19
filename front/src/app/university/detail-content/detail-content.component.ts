import { Component, OnInit } from '@angular/core';
import { UniversityService } from 'src/services/university/university.service';

@Component({
  selector: 'app-detail-content',
  templateUrl: './detail-content.component.html',
  styleUrls: ['./detail-content.component.scss']
})
export class DetailContentComponent implements OnInit {


  constructor(public universityService: UniversityService) { }

  ngOnInit() {
  }

}
