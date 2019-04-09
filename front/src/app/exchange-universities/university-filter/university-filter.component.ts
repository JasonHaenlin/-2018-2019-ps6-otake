import { Component, OnInit } from '@angular/core';
import {UniversityService} from "../../../services/university/university.service";
import {Observable} from "rxjs";
import {GeographicalArea} from "../../../models/GeographicalArea";
import {Language} from "../../../models/Language";
import {Major} from "../../../models/Major";

@Component({
  selector: 'app-university-filter',
  templateUrl: './university-filter.component.html',
  styleUrls: ['./university-filter.component.scss']
})
export class UniversityFilterComponent implements OnInit {

  public areaList$: Observable<GeographicalArea[]>;
  public languageList$: Observable<Language[]>;
  public majorList$: Observable<Major[]>;

  constructor(private university: UniversityService) { }

  ngOnInit() {
    this.areaList$ = this.university.getAreas();
    this.languageList$ = this.university.getLanguages();
    this.majorList$ = this.university.getMajors();
  }

}
