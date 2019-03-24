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

  getStudentById(id:number):Observable<Student>{
    return this.httpClient.get<Student>(this.appURL+"/"+id);
  }

  saveStudent(student:Student):Observable<Student>{
    return this.httpClient.post<Student>(this.appURL,student);
  }


  updateStudent(student:Student):Observable<Student>{
    return this.httpClient.put<Student>(this.appURL+"/"+student.id,student);
  }

  delete(id:number):Observable<Student>{
    return this.httpClient.delete<Student>(this.appURL+"/"+id);
  }
}
