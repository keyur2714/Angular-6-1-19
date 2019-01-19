import { Component, OnInit } from '@angular/core';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  cssClass : string = 'se';
  empList: Employee[] = [];

  constructor() { }

  ngOnInit() {
    let emp1 = new Employee();
    emp1.empId = 27;
    emp1.name= 'keyur';
    emp1.salary = 19191;
    emp1.designation = 'S/W Developer';    
    if(emp1.salary > 20000)
      emp1.bandColor = 'sse';
    else      
      emp1.bandColor = 'se';

    let emp2 = new Employee();
    emp2.empId = 26;
    emp2.name= 'denish';
    emp2.salary = 29191;
    emp2.designation = 'S/W Engineer';
    if(emp2.salary > 20000)
      emp2.bandColor = 'sse';
    else      
      emp2.bandColor = 'se';


    let emp3 = new Employee();
    emp3.empId = 44;
    emp3.name= 'vinit';
    emp3.salary = 39191;
    emp3.designation = 'Business Analyst';
    if(emp3.salary > 20000)
      emp3.bandColor = 'sse';
    else      
      emp3.bandColor = 'se';


    this.empList.push(emp1);
    this.empList.push(emp2);
    this.empList.push(emp3);
  }


}
