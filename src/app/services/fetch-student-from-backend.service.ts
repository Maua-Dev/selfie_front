import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/entities/student-admin-domain';
import { environment } from 'src/environments/environment';
import { FetchStudent } from './fetch-student';

@Injectable({
  providedIn: 'root',
})
export class FetchStudentFromBackendService implements FetchStudent {
  private readonly url = environment.BASE_URL;

  constructor(private http: HttpClient) {}

  FetchStudent(studentRA: string): Observable<Student> {
    return this.http.get<Student>(
      `${this.url}/get-selfies-by-ra?ra=${studentRA}`
    );
  }

  FetchStudentsList(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/get-all-students`);
  }
}
