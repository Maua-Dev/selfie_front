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

  private readonly baseURL: string = environment.BASE_URL_ESTUDANTE_DOMAIN

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
    //console.log('upload selfie:', this.selfie)
    return of(this.selfie);
  }

  public cuttingPhoto(base64Image: string) {
    return new Promise((res,rej) => {
      const resize_canvas = document.createElement('canvas');
      const img = new Image();
      img.src = base64Image;
      img.onload = () => {
        resize_canvas.width = 300;
        resize_canvas.height = 400;
        const ctx = resize_canvas.getContext('2d');
        ctx?.drawImage(img,150,0,300,400,0,0,300,400);
        const data = ctx?.canvas.toDataURL();
        res(data);
      }
      img.onerror = error => rej(error);
    })
  }
}
