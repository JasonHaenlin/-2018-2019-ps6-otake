import { Major } from '../../models/Major';
import { GeographicalArea } from '../../models/GeographicalArea';
import { Component, OnInit } from '@angular/core';
import { UniversityService } from './../../services/university/university.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public icon = 'fas fa-home fa-2x';
  public arrow_icon = 'fas fa-angle-down';

  public areaList$: Observable<GeographicalArea[]>;
  public majorList$: Observable<Major[]>;

  constructor(private universityService: UniversityService, private router: Router) { }

  ngOnInit() {
    this.areaList$ = this.universityService.getGeographicalAreas();
    this.majorList$ = this.universityService.getMajors();
  }

  goToUniversityList(area: string) {
    this.router.navigate(['/exchange-universities'], { queryParams: { destination: area }, queryParamsHandling: 'merge' });
  }

}
