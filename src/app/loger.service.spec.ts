import { TestBed } from '@angular/core/testing';

import { LogerService } from './loger.service';

describe('LogerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogerService = TestBed.get(LogerService);
    expect(service).toBeTruthy();
  });
});
