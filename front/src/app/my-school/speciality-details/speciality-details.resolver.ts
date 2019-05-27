import { Speciality } from 'src/models/Speciality';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { SchoolService } from 'src/services/school/school.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialityDetailsResolver implements Resolve<Speciality> {
  constructor(
    private schoolService: SchoolService,
    private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Speciality> | Observable<never> {
    return this.schoolService.getSpecialityDetails(route.paramMap.get('name')).pipe(
      take(1),
      switchMap(spec => {
        if (spec) {
          return of(spec);
        } else {
          this.router.navigate(['/page-not-found']);
          return EMPTY;
        }
      })
    );
  }
}
