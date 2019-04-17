import { Component, Input, OnInit } from '@angular/core';
import { SpecialityCard } from 'src/models/SpecialityCard';

@Component({
  selector: 'app-speciality-card',
  templateUrl: './speciality-card.component.html',
  styleUrls: ['./speciality-card.component.scss']
})
export class SpecialityCardComponent implements OnInit {

  @Input()
  speciality: SpecialityCard;

  constructor() { }

  ngOnInit() { }

}
