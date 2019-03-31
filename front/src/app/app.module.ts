import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoaderService } from 'src/app/utility/loader/loader.service';
import { ApplicationHttpClient, applicationHttpClientCreator } from 'src/core/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityModule } from './exchange-universities/university.module';
import { FlowMonitorModule } from './flow-monitor/flow.module';
import { HeaderComponent } from './header/header.component';
import { MySchoolModule } from './my-school/my-school.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UtilityModule } from './utility/utility.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageNotFoundComponent,
  ],
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    BrowserModule,

    UtilityModule,
    UniversityModule,
    MySchoolModule,
    FlowMonitorModule,
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
