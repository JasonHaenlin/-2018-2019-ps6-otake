import { Component, Input, OnInit } from '@angular/core';
import {Supervisor} from "../../../models/Supervisor";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input()
  supervisor: Supervisor;

  constructor() { }

  ngOnInit() {
  }

}
