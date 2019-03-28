import { LoaderComponent } from './loader';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionSelectorComponent } from './section-selector/section-selector.component';
import { RouterModule } from '@angular/router';
import { LoaderService } from './loader/loader.service';

@NgModule({
  declarations: [
    SectionSelectorComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SectionSelectorComponent,
    LoaderComponent,
  ],
  providers: [
    LoaderService,
  ]
})
export class UtilityModule { }
