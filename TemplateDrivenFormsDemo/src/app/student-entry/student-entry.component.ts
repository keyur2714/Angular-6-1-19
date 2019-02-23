import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Student } from './student.model';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  student : Student = new Student();
  isSubmittedAndValid: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  save(studentForm:NgForm):void{
    console.log(studentForm);
    if(studentForm.valid){
      this.isSubmittedAndValid = true;
      console.log(this.student.name+" "+this.student.mobileNo+" "+this.student.email);
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
