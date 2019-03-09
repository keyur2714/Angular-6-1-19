import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  appURL : string = 'http://localhost:3000/student';

  constructor(private httpClient : HttpClient) { }

  getStudentList():Observable<Response>{
    return this.httpClient.get<Response>(this.appURL);
  }
}
