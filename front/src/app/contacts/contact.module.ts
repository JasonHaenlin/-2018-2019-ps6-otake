import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilityModule } from '../utility/utility.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    ContactListComponent,
    ContactComponent,
    ContactPageComponent
  ],
  imports: [
    UtilityModule,
    CommonModule,
  ]
})
export class ContactModule { }
