import { Component, OnInit } from '@angular/core';
import { UniversityCard } from '../../../models/UniversityCard';
import { UniversityService } from '../../../services/university/university.service';

@Component({
  selector: 'app-university-list',
  templateUrl: './university-list.component.html',
  styleUrls: ['./university-list.component.scss']
})
export class UniversityListComponent implements OnInit {

  public universityCardList: UniversityCard[] = [];

  constructor(public universityService: UniversityService) { }

  ngOnInit() {
    this.universityService.getUniversityCards().subscribe((universityCards) => {
      this.universityCardList = universityCards;
    });
  }

}
