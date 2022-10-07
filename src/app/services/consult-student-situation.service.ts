import { Injectable } from '@angular/core';
import { StudentSituation } from '../entities/StudentSituation';

@Injectable({
  providedIn: 'root'
})
export class ConsultStudentSituationService {

  constructor() { }

  public GetStudentSituation() : StudentSituation {
    return StudentSituation.PENDENT
  }
}
