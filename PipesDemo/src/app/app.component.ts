import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';

  today : Date = new Date();

  numbers = interval(1000);


  person = {
    name: 'keyur',
    city: 'surat',
    state: 'Gujrat'
  };

  gradeList: string[] = ['Distinction','First','Second','Pass','Fail'];

  accountNumber: string = '9890430286';
  mobileNo : string = '7387029671';
  ngOnInit(){    
  }

  openWin(){    
    var myWindow = window.open("", "MsgWindow", "width=200,height=100");
    myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
  }
}
