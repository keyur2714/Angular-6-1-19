import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { EducationalDetailComponent } from './educational-detail/educational-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    EducationalDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
