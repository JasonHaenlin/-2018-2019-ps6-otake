import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionSelectorComponent } from './utility/section-selector/section-selector.component';
import { UniversityCardComponent } from './exchange-universities/university-card/university-card.component';
import { MajorDetailsComponent } from './my-school/major-details/major-details.component';
import { SpecialityDetailsComponent } from './my-school/speciality-details/speciality-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionSelectorComponent,
    UniversityCardComponent,
    routingComponents,
    MajorDetailsComponent,
    SpecialityDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
