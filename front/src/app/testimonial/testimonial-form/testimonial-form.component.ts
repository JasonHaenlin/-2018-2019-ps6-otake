import { UniversityService } from './../../../services/university/university.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin/admin.service';
import { Testimonial } from 'src/models/Testimonial';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {

  public testimonialForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public univService: UniversityService) {
    this.testimonialForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      major: ['', [Validators.required]],
      university: [''],
      text: [''],
    });
  }

  ngOnInit() {
  }

  submit() {
    const testimonial: Testimonial = this.testimonialForm.getRawValue() as Testimonial;
    this.univService.insertTestimonial(testimonial);
  }

}
