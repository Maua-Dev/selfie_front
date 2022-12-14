import { TestBed } from '@angular/core/testing';

import { UserSingletonService } from './user-singleton.service';

describe('UserSingletonService', () => {
  let service: UserSingletonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSingletonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
