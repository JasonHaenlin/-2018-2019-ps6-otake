import { ManagerService } from './../../../services/manage/manager.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormValidators } from '../../utility/form.validator';

@Component({
  selector: 'app-manage-testimonial',
  templateUrl: './manage-testimonial.component.html',
  styleUrls: ['./manage-testimonial.component.scss']
})
export class ManageTestimonialComponent implements OnInit {

  public emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private managerService: ManagerService) {
    this.emailForm = this.formBuilder.group({
      emails: this.formBuilder.array([])
    });
  }

  ngOnInit() {
    this.addEmailToForm();
  }

  sendNewtestimonial() {
    const emailsArray = [];
    this.emails.getRawValue().forEach(e => emailsArray.push(e.email));
    this.managerService.sendTestimonialForm(emailsArray).subscribe((r: any) => {
      if (r.token) {
        this.emailForm.reset();
      }
    });
  }

  addEmailToForm() {
    this.emails.push(this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(FormValidators.emailRx)]],
    }));
  }


  removeAt(index: number) {
    if (this.emails.length < 2) { return; }
    this.emails.removeAt(index);
  }

  resetForm() {
    for (let i = this.emails.length - 1; i > 0; i--) {
      this.emails.removeAt(i);
    }
  }

  getEmailObject(i: number) { return this.emails.at(i).value.email; }

  get emails() { return this.emailForm.get('emails') as FormArray; }

}
