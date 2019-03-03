import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Student } from './student.model';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  newStudent : Student = new Student();
  isSubmitted : boolean = false;

  studentEntryForm = new FormGroup({
    rollNo : new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    hobbies: new FormArray([new FormControl('')])
  });

  constructor() { }

  ngOnInit() {
  }

  addHobby():void{
    let newHobbyControl = new FormControl();
    (<FormArray>this.studentEntryForm.get('hobbies')).push(newHobbyControl);
  }

  save(){
    console.log(this.studentEntryForm.value);
    if(this.studentEntryForm.valid){
      this.isSubmitted = true;
      this.newStudent = this.studentEntryForm.value;
    }else{
      this.isSubmitted = false;
    }
  }
}
