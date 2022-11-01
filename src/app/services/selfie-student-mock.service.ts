import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Student } from "src/entities/student";
import { SelfieStudent } from "./selfie-student.service";

@Injectable({
  providedIn: 'root',
})
export class SelfieStudentMockService implements SelfieStudent {
  private selfie: string = '';

  private readonly baseURL : string = 'https://idxd34yq6k.execute-api.us-east-1.amazonaws.com/prod/mss-student';
  private studentRA : string = '21010757'
  private nome !: any

  constructor(private http: HttpClient){
  }

  public getName(): Observable<any> {
    this.http.get<any>(`${this.baseURL}/get-student?ra=${this.studentRA}`).subscribe(response =>{
      this.nome =  response['name']
      //console.log(of(this.nome))
    })
    return of(this.nome)
  }

  public getSelfie(): string {
    return this.selfie;
  }
  public uploadSelfie(base64Image: string): Observable<any> {
    this.selfie = base64Image;
    console.log('upload selfie:', this.selfie)
    return of(this.selfie);
  }

}