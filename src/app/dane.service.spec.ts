import { TestBed } from '@angular/core/testing';

import { DaneService } from './dane.service';

describe('DaneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaneService = TestBed.get(DaneService);
    expect(service).toBeTruthy();
  });
});
