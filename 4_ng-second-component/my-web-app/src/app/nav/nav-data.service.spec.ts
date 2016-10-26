/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NavDataService } from './nav-data.service';

describe('Service: NavData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavDataService]
    });
  });

  it('should ...', inject([NavDataService], (service: NavDataService) => {
    expect(service).toBeTruthy();
  }));
});
