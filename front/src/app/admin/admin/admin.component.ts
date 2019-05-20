import { AdminService } from './../../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() { }

  logout() {
    this.adminService.logout().subscribe();
    this.router.navigate(['']);
  }

}
