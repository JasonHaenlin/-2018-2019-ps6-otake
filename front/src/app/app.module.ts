import { ScrollingModule } from '@angular/cdk/scrolling';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from 'src/app/utility/loader/loader.service';
import { ApplicationHttpClient, applicationHttpClientCreator } from 'src/core/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactModule } from './contacts/contact.module';
import { FinancialAidPageComponent } from './financial-aid-page/financial-aid-page.component';
import { FlowMonitorModule } from './flow-monitor/flow.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestimonialCardComponent } from './testimonial/testimonial-card/testimonial-card.component';
import { TestimonialModule } from './testimonial/testimonial.module';
import { UtilityModule } from './utility/utility.module';
import { SearchUniversityComponent } from './outlets/search-university/search-university.component';
import { SelectMajorComponent } from './outlets/select-major/select-major.component';
import { BackOfficeModule } from './back-office/back-office.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomePageComponent,
    FooterComponent,
    FinancialAidPageComponent,
    SearchUniversityComponent,
    SelectMajorComponent,
  ],
  imports: [
    HttpClientModule,
    ScrollingModule,
    BrowserAnimationsModule,
    BrowserModule,
    UtilityModule,
    FlowMonitorModule,
    ContactModule,
    TestimonialModule,
    BackOfficeModule,
    AppRoutingModule,
  ],
  exports: [
    TestimonialCardComponent,
  ],
  providers: [
    {
      provide: ApplicationHttpClient,
      useFactory: applicationHttpClientCreator,
      deps: [HttpClient, LoaderService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
