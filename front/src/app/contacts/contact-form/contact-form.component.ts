import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {SchoolService} from '../../../services/school/school.service';
import {UniversityService} from '../../../services/university/university.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  public contactForm: FormGroup;
  public majorList = [];
  public categoryList = ['- - -', 'Technique', 'Echange', 'autres'];
  public categorySwitch: string;
  public techniqueList = ['Lien brisé', 'Affichage', 'autres'];
  public echangeList = ['Université', 'Bourse', 'Santé', 'Mobilité', 'autres'];

  constructor(public formBuilder: FormBuilder, public schoolService: SchoolService, public universityService: UniversityService) {

    this.contactForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      confirmationEmail: [''],
      category: [''],
      major: [''],
      object: [''],
      message: ['']
    });

  }

  ngOnInit() {
    this.universityService.getMajors().subscribe(majors => {
      this.majorList = majors;
    });
  }

  switchCat() {
    this.categorySwitch = this.category.value;
  }

  sendMail() {
    console.log('submit');
  }

  get category() {
    return this.contactForm.get('category');
  }
}

