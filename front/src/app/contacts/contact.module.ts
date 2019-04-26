import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilityModule } from '../utility/utility.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactComponent,
    ContactPageComponent,
    ContactFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    UtilityModule,
    CommonModule,
  ]
})
export class ContactModule { }
