import { TestBed, inject } from '@angular/core/testing';

import { DirectivesDataService } from './directives-data.service';

describe('DirectivesDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DirectivesDataService]
    });
  });

  it('should be created', inject([DirectivesDataService], (service: DirectivesDataService) => {
    expect(service).toBeTruthy();
  }));
});
