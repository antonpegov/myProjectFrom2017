import { TestBed, inject } from '@angular/core/testing';

import { HardcodeService } from './hardcode.service';

describe('HardcodeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HardcodeService]
    });
  });

  it('should be created', inject([HardcodeService], (service: HardcodeService) => {
    expect(service).toBeTruthy();
  }));
});
