import {Component, Input, OnInit} from '@angular/core';
import {University} from "../../../models/university";
import {UNIVERCITY_CARD_MOCKED} from "../../../mocks/UniversityCard.mock";
import {UniversityCard} from "../../../models/UniversityCard";

@Component({
  selector: 'app-university-card',
  templateUrl: './university-card.component.html',
  styleUrls: ['./university-card.component.scss']
})
export class UniversityCardComponent implements OnInit {

  public universityCards = UNIVERCITY_CARD_MOCKED;

  @Input()
  university: UniversityCard;

  constructor() {
    this.university = this.universityCards.pop()
  }

  ngOnInit() {

  }

}
