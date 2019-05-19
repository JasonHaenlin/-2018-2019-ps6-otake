import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, Event, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  admin: boolean;

  constructor(private router: Router) { this.isOnAdmin(); }

  isOnAdmin() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.admin = event.url.split('/')[1] === 'admin';
      }
    });
  }

  getAdminState(): boolean {
    return this.admin;
  }
}
