import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HttpDemo';
  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.studentService.getStudentList().subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{

      }
    )
  }
}
