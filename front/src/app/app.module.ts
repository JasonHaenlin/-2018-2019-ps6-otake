import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityModule } from './exchange-universities/university.module';
import { HeaderComponent } from './header/header.component';
import { MajorDetailsComponent } from './my-school/major-details/major-details.component';
import { SpecialityDetailsComponent } from './my-school/speciality-details/speciality-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UtilityModule } from './utility/utility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    MajorDetailsComponent,
    SpecialityDetailsComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    UniversityModule,
    UtilityModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
