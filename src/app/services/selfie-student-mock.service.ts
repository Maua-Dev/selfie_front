import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { SelfieStudent } from "./selfie-student.service";

@Injectable({
  providedIn: 'root',
})
export class SelfieStudentMockService implements SelfieStudent {
  public getSelfie(): string {
    return this.selfie;
  }
  constructor(){
    //console.log('get selfie:', this.selfie)
  }
  private selfie: string = '';

  public uploadSelfie(base64Image: string): Observable<any> {
    this.selfie = base64Image;
    console.log('upload selfie:', this.selfie)
    return of(this.selfie);
  }

}