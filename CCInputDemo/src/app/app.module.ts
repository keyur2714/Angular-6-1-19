import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyTableComponent } from './my-table/my-table.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { MyDropdownComponent } from './my-dropdown/my-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyTableComponent,
    EmpListComponent,
    StudentListComponent,
    MyDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
