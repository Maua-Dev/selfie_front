import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UpdateSelfieStateService } from './update-selfie-state.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateSelfieStateBackendService
  implements UpdateSelfieStateService
{
  private readonly BaseURL =
    'https://idxd34yq6k.execute-api.us-east-1.amazonaws.com/prod/mss-student';
  constructor(private http: HttpClient) {}
  UpdateSelfieState(
    ra: string,
    idSelfie: string,
    newState: string,
    newRejectionReason: string,
    newRejectionDescription: string
  ): void {
    this.http.post(`${this.BaseURL}/update-selfie`, {
      ra: ra,
      idSelfie: idSelfie,
      new_state: newState,
      new_rejectionReason: newRejectionReason,
      new_rejectionDescription: newRejectionDescription,
    });
  }
}
