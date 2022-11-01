import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/entities/student';
import { FetchStudent } from './fetch-student';

@Injectable({
  providedIn: 'root',
})
export class FetchStudentFromBackendService implements FetchStudent {
  studentsList: Student[] = [];
  private readonly baseURL: string =
    'https://idxd34yq6k.execute-api.us-east-1.amazonaws.com/prod/mss-student';

  constructor(private http: HttpClient) {}

  FetchStudent(studentRA: string) : Observable<Student> {
    return this.http.get<Student>(
      `${this.baseURL}/get-selfies-by-ra?ra=${studentRA}`
    );
  }

  FetchStudentsList(): Observable<Student[]> {
    return this.http.get<Student[]>(
      `${this.baseURL}/get-selfies-by-ra?ra=21010757`
    );
    
  }


}
