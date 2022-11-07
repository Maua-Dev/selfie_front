import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selfie } from 'src/entities/selfie';
import { FetchSelfieService } from './fetch-selfie.service';

@Injectable({
  providedIn: 'root'
})
export class FetchSelfieBackendService implements FetchSelfieService{

  constructor(private http : HttpClient) { }


  FetchAllSelfies(): Observable<Selfie[]> {
    return this.http.get<Selfie[]>(
      `https://08k8977qn8.execute-api.sa-east-1.amazonaws.com/prod/mss-student/get-all-selfies`
    );
  }
}
