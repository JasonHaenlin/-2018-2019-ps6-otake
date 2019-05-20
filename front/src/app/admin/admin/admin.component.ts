import { AdminService } from './../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit() { }

  logout() {
    console.log('logout !');
    this.adminService.login('admin', 'admin').subscribe(r => console.log(r));
  }

}
