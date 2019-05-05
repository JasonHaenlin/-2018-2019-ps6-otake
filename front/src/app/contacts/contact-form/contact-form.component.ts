import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {SchoolService} from '../../../services/school/school.service';
import {UniversityService} from '../../../services/university/university.service';
import {Mail} from "../../../models/Mail";

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

  sendMail () {
    let category = this.category.value;
    if(category === 'Echange'){
      category = category + "-" + this.major.value;
    }
    const mailToSend = <Mail>{
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      emailSender: '',
      emailReceiver: [],
      object: this.object.value,
      message: this.message.value
    };
    console.log(category);
    this.schoolService.getSupervisorEmailByCategory(category)
      .subscribe(ss => {
        mailToSend.emailReceiver = ss;
        mailToSend.emailSender = this.email.value;
        this.schoolService.sendEmail(mailToSend).subscribe( () => console.log('mail send'));
      });
  }

  get category() {return this.contactForm.get('category');}
  get major() {return this.contactForm.get('major');}
  get email() {return this.contactForm.get('email');}
  get firstName() {return this.contactForm.get('firstName');}
  get lastName() {return this.contactForm.get('lastName');}
  get object() {return this.contactForm.get('object');}
  get message() {return this.contactForm.get('message');}

}


