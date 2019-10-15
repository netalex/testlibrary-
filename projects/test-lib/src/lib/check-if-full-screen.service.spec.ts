import { TestBed } from '@angular/core/testing';

import { CheckIfFullScreenService } from './check-if-full-screen.service';

describe('CheckIfFullScreenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckIfFullScreenService = TestBed.get(CheckIfFullScreenService);
    expect(service).toBeTruthy();
  });
});
