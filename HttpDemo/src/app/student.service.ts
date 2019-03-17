import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from './student-model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  appURL : string = 'http://localhost:3000/student';

  constructor(private httpClient : HttpClient) { }

  getStudentList():Observable<Student[]>{
    return this.httpClient.get<Student[]>(this.appURL);
  }
}
