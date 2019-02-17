import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-my-dropdown',
  templateUrl: './my-dropdown.component.html',
  styleUrls: ['./my-dropdown.component.css']
})
export class MyDropdownComponent implements OnInit {

  selectedValue : any = {};

  @Input()
  dataList: any[] = [
    {
      "code":10,
      "desc":"IT"
    },
    {
      "code":20,
      "desc":"SALES"
    },
    {
      "code":30,
      "desc":"HR"
    }
  ];

  @Output('getSelectedValue')
  selectedValueEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  setSelectedValue(){
    this.selectedValueEvent.emit(this.selectedValue);
  }

}
