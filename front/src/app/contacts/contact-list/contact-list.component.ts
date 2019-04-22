import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../../services/school/school.service';
import {Supervisor} from '../../../models/Supervisor';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public supervisorList: Supervisor[] = [];

  constructor(public schoolService: SchoolService) { }

  ngOnInit() {
    this.supervisorList = this.schoolService.getSupervisors();
  }

}
