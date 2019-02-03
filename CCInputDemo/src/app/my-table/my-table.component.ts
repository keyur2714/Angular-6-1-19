import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {

  @Input()
  columnHeaderList: string[] = [];

  @Input()
  columnList: string[] = [];

  @Input()
  dataList: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
