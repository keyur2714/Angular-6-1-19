import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { ManageStudentComponent } from './manage-student/manage-student.component';
import { LoginComponent } from './login/login.component';
import { TokenInterceptor } from './token-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ManageStudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    StudentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
