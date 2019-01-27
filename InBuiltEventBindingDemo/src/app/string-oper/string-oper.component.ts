import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-oper',
  templateUrl: './string-oper.component.html',
  styleUrls: ['./string-oper.component.css']
})
export class StringOperComponent implements OnInit {

  convertedStr : string = '';
  isEmpty : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  upperCase(str:string):void{
    console.log(str);    
    this.convertedStr = str.toUpperCase();
  }

  lowerCase(str:string):void{
    console.log(str);    
    this.convertedStr = str.toLowerCase();
  }

  reverse(str:string):void{
    console.log(str);    
    let newStr = str.split('');
    console.log(newStr);
    let revNewStr = newStr.reverse();     
    console.log(revNewStr);    
    this.convertedStr = revNewStr.join('');
  }

  check(str:string){
    if(str != '' && str.length > 0){
      this.isEmpty = false;
    }else{
      this.isEmpty = true;
    }
  }
}
