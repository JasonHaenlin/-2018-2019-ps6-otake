import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AdminService } from 'src/services/admin/admin.service';
import { Testimonial } from 'src/models/Testimonial';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {

  public testimonialForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public adminService: AdminService) {
    this.testimonialForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      school: [''],
      text: [''],
    });
  }

  ngOnInit() {
  }

  addTestimonial() {
    const testimonial: Testimonial = this.testimonialForm.getRawValue() as Testimonial;
    this.adminService.insertTestimonial(testimonial);
  }

}
