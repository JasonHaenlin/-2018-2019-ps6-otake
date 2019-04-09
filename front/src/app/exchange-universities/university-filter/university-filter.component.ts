import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../../services/university/university.service';
import { Observable } from 'rxjs';
import { GeographicalArea } from '../../../models/GeographicalArea';
import { Language } from '../../../models/Language';
import { Major } from '../../../models/Major';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university-filter',
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss']
})
export class UniversityFilterComponent implements OnInit {

  public areaList$: Observable<GeographicalArea[]>;
  public languageList$: Observable<Language[]>;
  public majorList$: Observable<Major[]>;

  constructor(private university: UniversityService, private router: Router) {
  }

  ngOnInit() {
    this.areaList$ = this.university.getAreas();
    this.languageList$ = this.university.getLanguages();
    this.majorList$ = this.university.getMajors();
  }

  updateUrlByArea(selected: string) {
    console.log(selected);
    this.router.navigate(['/exchange-universities/area'], { queryParams: { destination: selected }, queryParamsHandling: 'merge' });
  }

  updateUrlByMajor(selected: string) {
    console.log(selected);
    this.router.navigate(['/exchange-universities/area'], { queryParams: { department: selected }, queryParamsHandling: 'merge' });
  }

  updateUrlByLanguage(selected: string) {
    console.log(selected);
    this.router.navigate(['/exchange-universities/area'], { queryParams: { language: selected }, queryParamsHandling: 'merge' });
  }

}
