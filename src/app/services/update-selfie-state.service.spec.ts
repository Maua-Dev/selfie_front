import { TestBed } from '@angular/core/testing';

import { UpdateSelfieStateService } from './update-selfie-state.service';

describe('UpdateSelfieStateService', () => {
  let service: UpdateSelfieStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSelfieStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
