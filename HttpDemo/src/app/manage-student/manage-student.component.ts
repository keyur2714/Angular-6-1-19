import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student-model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {

  studentList : Student[] = [];

  status: number = 0;

  studentForm : FormGroup;

  newStudent : Student = new Student();

  isUpdate : boolean = false;

  constructor(private studentService: StudentService,private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.getStudentList();
    this.createStudentForm();
  }

  createStudentForm(){
    this.studentForm = this.formBuilder.group({
      id : new FormControl('',Validators.required),
      name : new FormControl('',[Validators.required,Validators.minLength(3)])
    })
  }

  getStudentList():void{
    this.studentService.getStudentList().subscribe(
      (data:Student[])=>{
        this.studentList = data;        
        this.studentForm.reset({"id":'',"name":''});
      },
      (error)=>{

      }
    )
  }

  save():void{
    this.newStudent = this.studentForm.value;
    let isExist = false;
    for(let student of this.studentList){      
      if(student.id == this.newStudent.id){
        isExist = true;
        this.status = 304;
        break;
      }
    }
    console.log(this.newStudent.id+ " "+ this.newStudent.name);
    if(! isExist){
      alert('999999');
      this.studentService.saveStudent(this.newStudent).subscribe(
        (data)=>{
          console.log(data);
          this.status = 204;
          this.getStudentList();
        },
        (error)=>{
  
        }
      )
    }    
  }

  edit(id:number):void{
    this.isUpdate = true;
    this.studentService.getStudentById(id).subscribe(
      (student: Student)=>{
        this.studentForm.setValue({id: student.id , name: student.name});
      }
    )
  }


  update():void{
    this.newStudent = this.studentForm.value;
    console.log(this.newStudent.id+ " "+ this.newStudent.name);
    this.studentService.updateStudent(this.newStudent).subscribe(
      (data)=>{
        console.log(data);
        this.status = 205;
        this.getStudentList();
        this.isUpdate = false;      
      },
      (error)=>{

      }
    )
  }
}
