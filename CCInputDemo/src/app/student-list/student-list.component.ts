import { Component, OnInit } from '@angular/core';
import { Student } from './student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList : Student[] = [];
  columnHeaderList : string[] = ["Roll No","Name"];
  columnList : string[] = ["rollNo","name"];

  constructor() { }

  ngOnInit() {
    let stud1 = new Student();
    stud1.rollNo = 27;
    stud1.name = 'keyur';

    let stud2 = new Student();
    stud2.rollNo = 26;
    stud2.name = 'denish';

    let stud3 = new Student();
    stud3.rollNo = 44;
    stud3.name = 'vinit';

    this.studentList.push(stud1);
    this.studentList.push(stud2);
    this.studentList.push(stud3);

  }

}
