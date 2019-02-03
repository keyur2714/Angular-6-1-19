import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MyTableComponent } from './my-table/my-table.component';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MyTableComponent,
    EmpListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
