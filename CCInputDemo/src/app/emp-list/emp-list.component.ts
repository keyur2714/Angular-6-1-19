import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  empList: Employee[] = [];
  columnHeaderList : string[] = ["Id","Name","Designation","Dept"];
  columnList : string[] = ["empId","name","designation","dept"];

  selectedCellValue: any = '';
  constructor() { }

  ngOnInit() {
    let emp1 = new Employee();
    emp1.empId = 'E27';
    emp1.name = 'keyur';
    emp1.designation = 'Programmer';
    emp1.salary = 1111;
    emp1.dept = 'IT';

    let emp2 = new Employee();
    emp2.empId = 'E26';
    emp2.name = 'denish';
    emp2.designation = 'Developer';
    emp2.salary = 2111;
    emp2.dept = 'IT';

    let emp3 = new Employee();
    emp3.empId = 'E44';
    emp3.name = 'vinit';
    emp3.designation = 'BA';
    emp3.salary = 3111;
    emp3.dept = 'Sales';

    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
  }

  getColumnValue(value){
    this.selectedCellValue = value;
  }
}
