import { TestBed } from '@angular/core/testing';

import { TransmissionServService } from './transmission-serv.service';

describe('TransmissionServService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransmissionServService = TestBed.get(TransmissionServService);
    expect(service).toBeTruthy();
  });
});
