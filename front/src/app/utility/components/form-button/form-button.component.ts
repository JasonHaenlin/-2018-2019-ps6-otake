import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.scss']
})
export class FormButtonComponent implements OnInit {

  @Input() label: string;
  @Input() formGroup: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  event() {
    this.submit.emit(null);
  }

}
