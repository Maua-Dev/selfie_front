import { TestBed } from '@angular/core/testing';

import { FetchSelfieMockService } from './fetch-selfie-mock.service';

describe('FetchSelfieMockService', () => {
  let service: FetchSelfieMockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchSelfieMockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
