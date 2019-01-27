import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-oper',
  templateUrl: './number-oper.component.html',
  styleUrls: ['./number-oper.component.css']
})
export class NumberOperComponent implements OnInit {
  number1: number = 10;
  number2: number = 5;
  result : number = 0;
  constructor() { }

  ngOnInit() {
  }
  add():void{
    this.result = this.number1 + this.number2;
  }
  sub():void{
    this.result = this.number1 - this.number2;
  }
  mul():void{
    this.result = this.number1 * this.number2;
  }
  div():void{
    if(this.number2 != 0 ){
      this.result = this.number1 / this.number2;
    }    
  }
}
