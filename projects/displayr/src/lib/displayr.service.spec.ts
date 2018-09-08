import { TestBed } from '@angular/core/testing';

import { DisplayrService } from './displayr.service';

describe('DisplayrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayrService = TestBed.get(DisplayrService);
    expect(service).toBeTruthy();
  });
});
