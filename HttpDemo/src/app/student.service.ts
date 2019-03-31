import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type','application/json');
    console.log(window.sessionStorage.getItem("token"));
    return this.httpClient.get<Student>(this.appURL+"/"+id);
  }

  saveStudent(student:Student):Observable<Student>{
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type','application/json');
    return this.httpClient.post<Student>(this.appURL,student,{ headers: httpHeaders });
  }


  updateStudent(student:Student):Observable<Student>{
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type','application/xml');
    return this.httpClient.put<Student>(this.appURL+"/"+student.id,student,{headers: httpHeaders});
  }

  delete(id:number):Observable<Student>{
    return this.httpClient.delete<Student>(this.appURL+"/"+id);
  }
}
