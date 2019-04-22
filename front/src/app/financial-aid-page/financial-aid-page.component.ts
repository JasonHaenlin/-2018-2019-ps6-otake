import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialAid } from 'src/models/FinancialAid';
import { UniversityService } from './../../services/university/university.service';

@Component({
  selector: 'app-financial-aid-page',
  templateUrl: './financial-aid-page.component.html',
  styleUrls: ['./financial-aid-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FinancialAidPageComponent implements OnInit {

  public financialAidList$: Observable<FinancialAid[]>;

  constructor(private universityService: UniversityService) { }

  ngOnInit() {
    this.financialAidList$ = this.universityService.getFinancialAids();
  }

}
