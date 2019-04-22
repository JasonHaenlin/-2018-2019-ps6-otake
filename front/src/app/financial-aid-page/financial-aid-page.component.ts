import { FinancialAid } from 'src/models/FinancialAid';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SchoolService } from 'src/services/school/school.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-financial-aid-page',
  templateUrl: './financial-aid-page.component.html',
  styleUrls: ['./financial-aid-page.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FinancialAidPageComponent implements OnInit {

  public financialAidList$: Observable<FinancialAid[]>;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.financialAidList$ = this.schoolService.getFinancialAids();
  }

}
