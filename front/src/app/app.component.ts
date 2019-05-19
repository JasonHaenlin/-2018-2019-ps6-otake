
import { Component } from '@angular/core';
import { ActivatedRoute, Event, Router, NavigationEnd } from '@angular/router';
import { LoginComponent } from './back-office/login/login.component';
import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flowActived = false;

  constructor(private adminService: AdminService) {}

  isOnAdmin() {
    return this.adminService.getAdminState();
  }

  flowActivedEvent(state: boolean) {
    this.flowActived = state;
  }
}
