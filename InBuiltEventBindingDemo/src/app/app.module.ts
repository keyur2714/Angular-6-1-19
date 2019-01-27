import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { StringOperComponent } from './string-oper/string-oper.component';
import { NumberOperComponent } from './number-oper/number-oper.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    StringOperComponent,
    NumberOperComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
