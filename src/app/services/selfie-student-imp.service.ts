import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/entities/student-aluno-domain';
import { SelfieStudent } from './selfie-student.service';
@Injectable({
  providedIn: 'root',
})
export class SelfieStudentImp implements SelfieStudent {
  private readonly baseURL: string = environment.BASE_URL_ESTUDANTE_DOMAIN

  constructor(private http: HttpClient) {}

  private studentRA: string = '17090212';

  public getStudent(): Observable<Student> {
    return this.http.get<Student>(
      `${this.baseURL}/get-student?ra=${this.studentRA}`
    );
  }

  public getSelfie(): string {
    throw new Error('Method not implemented.');
  }

  public uploadSelfie(base64Image: string): Observable<any> {
    console.log('ta utilizando aq?');
    const body = { url: base64Image };
    return this.http.post<any>('', body);
  }
}
