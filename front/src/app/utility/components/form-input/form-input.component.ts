import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input() type: string;
  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() placeholder: string;


  constructor() { }

  ngOnInit() {
    this.type = this.type || 'text';
    this.placeholder = this.placeholder || '';
  }

  get object() { return this.formGroup.get(this.formControlName); }

}
