import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class UpdateSelfieStateService {
  abstract UpdateSelfieState(ra:string, idSelfie:string, newState : string, newRejectionReason:string[], newRejectionDescription:string) : void
}
