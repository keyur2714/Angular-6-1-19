import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CCOutputDemo';
  formatteMsg : string = '';
  getMessage(fMsg){
    console.log(2);
    this.formatteMsg = fMsg;
  }
}
