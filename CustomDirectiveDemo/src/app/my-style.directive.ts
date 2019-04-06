import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

@Directive({
  selector: '[appMyStyle]'
})
export class MyStyleDirective implements AfterViewInit{

  @Input()
  color: string = 'red';

  @Input()
  fontSize: string = '15px';

  constructor(private elementRef: ElementRef) { 
    console.log("Directive Object Created....");
    console.log("Element: "+this.elementRef.nativeElement);
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.style.color = this.color;
    this.elementRef.nativeElement.style.fontSize = this.fontSize;
    this.elementRef.nativeElement.innerHTML = 'Hello';
  }

  changeColor(color:string,elementRef: ElementRef):void{
    this.elementRef = elementRef;
    this.elementRef.nativeElement.style.color = color;
  }
}
