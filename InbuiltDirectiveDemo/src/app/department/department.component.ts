import { Component, OnInit } from '@angular/core';
import { Department } from '../model/dept-model';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  dept : Department = new Department(10,"IT","Information Technology");

  constructor() { 
    console.log("Always First...Before Init...!");
  }

  ngOnInit() {
    console.log("After Init...!");    
  }

}
