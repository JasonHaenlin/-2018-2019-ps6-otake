import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.scss']
})
export class FormSelectComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() label: string;
  @Input() options: string[];
  @Input() key: string;
  @Input() default: boolean;

  constructor() { }

  ngOnInit() {
    this.default = this.default || false;
  }

  get object() { return this.formGroup.get(this.formControlName); }
}
