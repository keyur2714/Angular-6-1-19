import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.css']
})
export class PersonalDetailComponent implements OnInit {

  firstName: string = 'Keyur';
  lastName: string = 'Thakor';
  city: string = 'surat';
  age: number = 32;
  gender: string = 'Male';
  dob: string = '27/12/1986';


  constructor() { }

  ngOnInit() {
  }

}
