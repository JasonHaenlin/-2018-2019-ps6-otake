import { Major } from './../../../models/Major';
import { FormValidators } from './../../utility/form.validator';
import { UniversityService } from './../../../services/university/university.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/services/admin/admin.service';
import { Testimonial } from 'src/models/Testimonial';
import { Observable } from 'rxjs';
import { University } from 'src/models/University';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testimonial-form',
  templateUrl: './testimonial-form.component.html',
  styleUrls: ['./testimonial-form.component.scss']
})
export class TestimonialFormComponent implements OnInit {

  public majors$: Observable<Major[]>;
  public universities$: Observable<University[]>;
  public selectedUniv: University = { id: -1, name: '', };

  public testimonialForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public univService: UniversityService,
    private route: ActivatedRoute) {
    this.testimonialForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.pattern(FormValidators.emailRx)]],
      major_id: [''],
      university_id: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    this.majors$ = this.univService.getMajors();
  }

  updateList(terms: string) {
    this.universities$ = this.univService.getUniversitiesByTerms(terms);
  }

  select(u: University) {
    this.selectedUniv = u;
    this.university.setValue(u.id);
  }

  submit() {
    const testimonial: Testimonial = this.testimonialForm.getRawValue() as Testimonial;
    testimonial.major_id = testimonial['major_id']['id'];
    this.univService.insertTestimonial(testimonial, this.route.snapshot.paramMap.get('token')).subscribe();
  }

  get university() { return this.testimonialForm.get('university_id'); }

}
