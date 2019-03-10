import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployeeList():Employee[]{
    let empList: Employee[]= [
      {
        empId : 27,
        name: 'keyur'
      },
      {
        empId : 26,
        name: 'denish'
      },
      {
        empId : 44,
        name: 'vinit'
      }
    ];
    return empList;
  }

  getEmployeeListObservable():Observable<Employee[]>{
    let empList: Employee[]= [
      {
        empId : 27,
        name: 'keyur'
      },
      {
        empId : 26,
        name: 'denish'
      },
      {
        empId : 44,
        name: 'vinit'
      }
    ];
    return of(empList);
  }
}
