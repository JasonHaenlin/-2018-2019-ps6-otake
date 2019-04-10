import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../../../services/university/university.service';
import { Observable } from 'rxjs';
import { GeographicalArea } from '../../../models/GeographicalArea';
import { Language } from '../../../models/Language';
import { Major } from '../../../models/Major';
import { Router } from '@angular/router';

const mainRouteUrl = '/exchange-universities/area';
@Component({
  selector: 'app-university-filter',
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss']
})
export class UniversityFilterComponent implements OnInit {

  public areaList$: Observable<GeographicalArea[]>;
  public languageList$: Observable<Language[]>;
  public majorList$: Observable<Major[]>;

  public selectedArea = '';
  public selectedMajor = '';
  public selectedLanguage = '';

  constructor(private university: UniversityService, private router: Router) {
  }

  ngOnInit() {
    this.areaList$ = this.university.getAreas();
    this.languageList$ = this.university.getLanguages();
    this.majorList$ = this.university.getMajors();
  }

  updateUrlByArea(selected: string) {
    if (selected === this.selectedArea) {
      this.selectedArea = '';
      this.router.navigate([mainRouteUrl], { queryParams: { destination: null }, queryParamsHandling: 'merge' });
    } else {
      this.selectedArea = selected;
      this.router.navigate([mainRouteUrl], { queryParams: { destination: selected }, queryParamsHandling: 'merge' });
    }
  }

  updateUrlByMajor(selected: string) {
    if (selected === this.selectedMajor) {
      this.selectedMajor = '';
      this.router.navigate([mainRouteUrl], { queryParams: { department: null }, queryParamsHandling: 'merge' });
    } else {
      this.selectedMajor = selected;
      this.router.navigate([mainRouteUrl], { queryParams: { department: selected }, queryParamsHandling: 'merge' });
    }
  }

  updateUrlByLanguage(selected: string) {
    if (selected === this.selectedLanguage) {
      this.selectedLanguage = '';
      this.router.navigate([mainRouteUrl], { queryParams: { language: null }, queryParamsHandling: 'merge' });
    } else {
      this.selectedLanguage = selected;
      this.router.navigate([mainRouteUrl], { queryParams: { language: selected }, queryParamsHandling: 'merge' });
    }
  }

}
