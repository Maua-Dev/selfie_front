import { TestBed } from '@angular/core/testing';

import { FetchSelfieService } from './fetch-selfie.service';

describe('FetchSelfieService', () => {
  let service: FetchSelfieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSelfieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
