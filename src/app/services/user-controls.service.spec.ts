import { TestBed } from '@angular/core/testing';

import { UserControlsService } from './user-controls.service';

describe('UserControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserControlsService = TestBed.get(UserControlsService);
    expect(service).toBeTruthy();
  });
});
