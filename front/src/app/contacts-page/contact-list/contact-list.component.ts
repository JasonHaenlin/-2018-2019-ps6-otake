import { Component, OnInit } from '@angular/core';
import {SchoolService} from '../../../services/school/school.service';
import {Supervisor} from '../../../models/Supervisor';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {

  public supervisorList$: Observable<Supervisor[]>;

  constructor(public schoolService: SchoolService) { }

  ngOnInit() {
    this.supervisorList$ = this.schoolService.getSupervisors();
  }

}
