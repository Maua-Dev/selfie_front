import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelfieStudent } from './selfie-student.service';

@Injectable({
  providedIn: 'root',
})
export class SelfieStudentMockService implements SelfieStudent {
  private selfie: string = '';

  private readonly baseURL: string | undefined = environment.BASE_URL_ESTUDANTE_DOMAIN

  constructor(private http: HttpClient) {}

  private studentRA: string = '20010990';

  public getStudent(): Observable<any> {
    return this.http.get<any>(
      `${this.baseURL}/get-student?ra=${this.studentRA}`
    );
  }

  public getStudentAndSelfie() : Observable<any>{
    return this.http.get<any>(
      `${this.baseURL}/get-selfies-by-ra?ra=${this.studentRA}`
    )
  }

  public getSelfie(): string {
    return this.selfie;
  }

  public uploadSelfie(base64Image: string): Observable<any> {
    this.selfie = base64Image;
    return of(this.selfie);
  }
}
