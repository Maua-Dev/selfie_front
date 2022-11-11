import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Selfie } from 'src/entities/selfie';
import { environment } from 'src/environments/environment';
import { FetchSelfieService } from './fetch-selfie.service';

@Injectable({
  providedIn: 'root'
})
export class FetchSelfieBackendService implements FetchSelfieService {
  private readonly url = environment.BASE_URL;
  constructor(private http: HttpClient) { }


  FetchAllSelfies(): Observable<Selfie[]> {
    return this.http.get<Selfie[]>(
      `${this.url}/get-all-selfies`
    ).pipe(
      map((resp: any) => {
        const allSelfies = resp['all_selfies'];
        return allSelfies.map((val: any) => {
          return Selfie.InstatiateSelfieFromJson(val);
        })
      })
    );
  }
}
