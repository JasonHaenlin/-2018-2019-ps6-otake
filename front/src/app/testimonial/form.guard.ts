import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AdminService } from '../../services/admin/admin.service';

@Injectable({
  providedIn: 'root',
})
export class FormGuard implements CanActivate {
  constructor(private adminService: AdminService, private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    return this.adminService.checkToken(next.paramMap.get('token')).pipe(
      map(auth => {
        if (auth.token) {
          return true;
        }
        this.router.navigate(['/page-not-found']);
        return false;
      }),
      catchError((err) => {
        this.router.navigate(['/page-not-found']);
        return of(false);
      }));
  }


}
