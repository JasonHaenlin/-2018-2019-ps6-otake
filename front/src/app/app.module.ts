import { ContactModule } from './contacts/contact.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from 'src/app/utility/loader/loader.service';
import { ApplicationHttpClient, applicationHttpClientCreator } from 'src/core/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowMonitorModule } from './flow-monitor/flow.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UtilityModule } from './utility/utility.module';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FinancialAidPageComponent } from './financial-aid-page/financial-aid-page.component';
import { TestimonialCardComponent } from './testimonial/testimonial-card/testimonial-card.component';
import { TestimonialListComponent } from './testimonial/testimonial-list/testimonial-list.component';
import { TestimonialPageComponent } from './testimonial/testimonial-page/testimonial-page.component';
import { TestimonialModule } from './testimonial/testimonial.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
    HomePageComponent,
    FooterComponent,
    FinancialAidPageComponent,
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
