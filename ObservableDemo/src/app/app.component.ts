import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable,of,interval,Subscription } from 'rxjs';
import { map,catchError  } from 'rxjs/operators';
import { LoggingService } from 'src/services/logging.service';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'ObservableDemo';

  numSubScription: Subscription;
  numberObservable: Observable<number> = interval(1000);   
  num: number= 0;
  employeeList : Employee[] = []
  constructor(private loggingService: LoggingService,private employeeService:EmployeeService){
    this.loggingService.logInfo("App Conponent Object Created...!");
  }
  ngOnInit(){
    this.numSubScription = this.numberObservable.subscribe(
      (data)=>{
        //console.log(data);
        this.num = data;
      }
    )    
    this.employeeList = this.employeeService.getEmployeeList();

    this.employeeService.getEmployeeListObservable().subscribe(
      (data)=>{
        console.log(data);
      }
    );
  }

  ngOnDestroy(){
    this.numSubScription.unsubscribe();
  }
}
