import { Component, Input, OnInit } from '@angular/core';
import { UniversityCard } from '../../../models/UniversityCard';

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss']
})
export class UniversityCardComponent implements OnInit {

  @Input()
  university: UniversityCard;

  constructor() {
  }

  ngOnInit() {
    
  }

}
