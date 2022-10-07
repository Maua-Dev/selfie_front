import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultStudentSituationService {

  constructor() { }

  public GetStudentSituation() : StudentSituation {
    return StudentSituation.APROVED
  }
}
