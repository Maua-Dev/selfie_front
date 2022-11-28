import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UpdateSelfieStateService } from './update-selfie-state.service';

@Injectable({
  providedIn: 'root',
})
export class UpdateSelfieStateBackendService
  implements UpdateSelfieStateService
{
  private readonly url = environment.BASE_URL_ADM_DOMAIN
  constructor(private http: HttpClient) {}
  UpdateSelfieState(
    ra: string,
    idSelfie: string,
    newState: string,
    newRejectionReason: string[],
    newRejectionDescription: string
  ): void {
    this.http.post(`${this.url}/update-selfie`, {
      ra: ra,
      idSelfie: idSelfie,
      new_state: newState,
      new_rejectionReason: newRejectionReason,
      new_rejectionDescription: newRejectionDescription,
    });
  }
}
