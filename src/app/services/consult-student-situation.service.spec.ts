import { TestBed } from '@angular/core/testing';

import { ConsultStudentSituationService } from './consult-student-situation.service';

describe('ConsultStudentSituationService', () => {
  let service: ConsultStudentSituationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultStudentSituationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
