import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { UniversityDetails } from 'src/models/UniversityDetails';
import { UniversityService } from './../../../services/university/university.service';

@Injectable({
  providedIn: 'root'
})
export class UniversityDetailsResolver implements Resolve<UniversityDetails> {
  constructor(
    private universityService: UniversityService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<UniversityDetails> | Observable<never> {
    return this.universityService.getUniversityDetails(route.paramMap.get('id')).pipe(
      take(1),
      switchMap(univ => {
        if (univ) {
          return of(univ);
        } else {
          this.router.navigate(['/page-not-found']);
          return EMPTY;
        }
      })
    );
  }
}
