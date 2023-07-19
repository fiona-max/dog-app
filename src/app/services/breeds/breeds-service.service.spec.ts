import { TestBed } from '@angular/core/testing';

import { BreedsServiceService } from './breeds-service.service';

describe('BreedsServiceService', () => {
  let service: BreedsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreedsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
