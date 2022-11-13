import { TestBed } from '@angular/core/testing';

import { UpdateSelfieStateBackendService } from './update-selfie-state-backend.service';

describe('UpdateSelfieStateBackendService', () => {
  let service: UpdateSelfieStateBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSelfieStateBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
