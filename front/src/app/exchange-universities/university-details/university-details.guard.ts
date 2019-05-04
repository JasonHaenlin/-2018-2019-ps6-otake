import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

const checkNumber = new RegExp('^[0-9]*$');

@Injectable({
  providedIn: 'root'
})
export class UniversityDetailsGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot): boolean {

    const check = checkNumber.test(next.paramMap.get('id'));
    if (!check) {
      this.router.navigate(['exchange-universities']);
    }
    return check;
  }

}
