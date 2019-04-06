import { Component, ElementRef, ViewChild } from '@angular/core';
import { MyStyleDirective } from './my-style.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirectiveDemo';
  
  @ViewChild("m1")
  m1 : ElementRef;

  @ViewChild("m2")
  m2 : ElementRef;

  @ViewChild(MyStyleDirective)
  myStyleDirective: MyStyleDirective;

  changeColor(color):void{       
    console.log(this.m1.nativeElement); 
    console.log(this.m2.nativeElement); 
    this.myStyleDirective.changeColor(color,this.m1);
    this.myStyleDirective.changeColor(color,this.m2);
  }
}
