
import { Component } from '@angular/core';
import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public flowActived = false;

  constructor(private adminService: AdminService) {}

  isNotOnAdmin() {
    return !this.adminService.getAdminState();
  }

  flowActivedEvent(state: boolean) {
    this.flowActived = state;
  }
}
