import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, of } from 'rxjs';
import { map,catchError  } from 'rxjs/operators';

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
  getUpperCaseEmployeeList():Observable<Employee[]>{
    const nums = of(1, 2, 3); 
    const empList = of(this.getEmployeeList()); 
    const squareValues = map((val: number) => val * val);
    const uppeCaseEmpList = map((empList:Employee[]) => {
      if (!empList) {
        throw new Error('Value expected!');
      }
      for(let emp of empList){
        emp.name = emp.name.toUpperCase()
      }
      return empList;
    })
    catchError(err => of([]));
    const squaredNums = squareValues(nums);
    const upperCaseEmpList = uppeCaseEmpList(empList);
    return upperCaseEmpList;
  }
}
