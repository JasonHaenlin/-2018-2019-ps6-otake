import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { UniversityDetailsComponent } from './university/university-details/university-details.component';
import { SectionSelectorComponent } from './utility/section-selector/section-selector.component';
<<<<<<< HEAD
import { UniversityListComponent } from './university/university-list/university-list.component';
=======
import { UniversityCardComponent } from './university/university-card/university-card.component';
>>>>>>> 678b441637e446a5e9c2bfb4a45293a300b0c224

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    UniversityDetailsComponent,
    SectionSelectorComponent,
<<<<<<< HEAD
    UniversityListComponent,
=======
    UniversityCardComponent,
>>>>>>> 678b441637e446a5e9c2bfb4a45293a300b0c224
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
