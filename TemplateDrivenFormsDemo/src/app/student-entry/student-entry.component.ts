import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student.model';
import { Course } from './course.model';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student();
  isSubmittedAndValid: boolean = false;

  courseList: Course[] = [];

  constructor() { }

  ngOnInit() {
    let course1 = new Course();
    course1.id = 1;
    course1.courseName = 'Angular';
    course1.fees = 12000;
    course1.trainerName = 'keyur';

    let course2 = new Course();
    course2.id = 2;
    course2.courseName = 'Data Science';
    course2.fees = 15000;
    course2.trainerName = 'Abhinav';


    let course3 = new Course();
    course3.id = 3;
    course3.courseName = 'BigData';
    course3.fees = 15000;
    course3.trainerName = 'Vaibhav';

    this.courseList.push(course1);
    this.courseList.push(course2);
    this.courseList.push(course3);

    this.student.course = course2;
    this.student.regStatus = 'Enrolled';
  }

  save(studentForm:NgForm):void{
    console.log(studentForm);
    if(studentForm.valid){
      this.isSubmittedAndValid = true;
      console.log(this.student.name+" "+this.student.mobileNo+" "+this.student.email+" "+this.student.course.courseName);
      console.log(studentForm);
      console.log(studentForm.value);
      console.log("Name: "+studentForm.controls["name"].value);
      console.log("Mobile No: "+studentForm.controls["mobileNo"].value);
      console.log("Email: "+studentForm.controls["email"].value);      
    }else{
      this.isSubmittedAndValid = false;
      alert("Please complete All Mandatory Fields...");
    }
    
  }
}
