import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { University } from 'src/models/University';
import { Observable } from 'rxjs';
import { UniversityService } from 'src/services/university/university.service';

@Component({
  selector: 'app-search-university',
  templateUrl: './search-university.component.html',
  styleUrls: ['./search-university.component.scss']
})
export class SearchUniversityComponent implements OnInit {

  public universities$: Observable<University[]>;
  public selectedUniv: University = { id: -1, name: '', };

  constructor(private router: Router,
    private universityService: UniversityService) { }

  ngOnInit() {
  }

  updateList(terms: string) {
    this.universities$ = this.universityService.getUniversitiesByTerms(terms);
  }

  select(u: University) {
    this.selectedUniv = u;
  }

  go() {
    this.closePopup().then(() => this.router.navigate(['/exchange-universities/details', this.selectedUniv.id]));
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    return this.router.navigate([{ outlets: { addon: null } }]);
  }

}
