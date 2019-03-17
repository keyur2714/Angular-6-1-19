import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { Student } from './student-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'HttpDemo';
  studentList : Student[] = [];
  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.studentService.getStudentList().subscribe(
      (data:Student[])=>{
        console.log(data);
        this.studentList = data;
      },
      (error)=>{

      }
    )
  }
}
