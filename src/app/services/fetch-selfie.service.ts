import { Selfie } from 'src/entities/selfie';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class FetchSelfieService {
  abstract FetchAllSelfies() : Observable<Selfie[]>
  constructor() { }
}
