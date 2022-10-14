import { TestBed } from '@angular/core/testing';

import { FetchStudentService } from './fetch-student-mock.service';

describe('FetchStudentService', () => {
  let service: FetchStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
