import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input('color')
  bgColor : string = 'dark';



  @Input()
  columnHeaderList: string[] = [];

  @Input()
  columnList: string[] = [];

  @Input()
  dataList: any[] = [];

  @Output()
  getSelectedColumnValue = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  getSelectedRow(selectedId){
    console.log(selectedId);
    this.getSelectedColumnValue.emit(selectedId);
  }
}
