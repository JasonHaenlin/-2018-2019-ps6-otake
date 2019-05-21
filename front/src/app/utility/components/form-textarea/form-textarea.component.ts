import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-textarea',
  templateUrl: './form-textarea.component.html',
  styleUrls: ['./form-textarea.component.scss']
})
export class FormTextareaComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formControlName: string;
  @Input() maxlength: number;
  @Input() placeholder: string;

  public messageLen = 0;

  constructor() { }

  ngOnInit() {
    this.maxlength = this.maxlength || 500;
    this.placeholder = this.placeholder || 'Votre message';
    this.object.valueChanges.subscribe(v => this.messageLen = v.length);
  }

  get object() { return this.formGroup.get(this.formControlName); }

}
