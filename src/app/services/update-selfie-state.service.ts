import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selfie } from 'src/entities/selfie';

@Injectable({
  providedIn: 'root'
})
export abstract class UpdateSelfieStateService {
  abstract UpdateSelfieState(ra:string, idSelfie:string, newState : string, newRejectionReason:string[], newRejectionDescription:string) : Observable<Selfie>
}
