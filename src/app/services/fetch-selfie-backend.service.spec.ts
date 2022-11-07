import { TestBed } from '@angular/core/testing';

import { FetchSelfieBackendService } from './fetch-selfie-backend.service';

describe('FetchSelfieBackendService', () => {
  let service: FetchSelfieBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSelfieBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
