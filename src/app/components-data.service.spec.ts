import { TestBed, inject } from '@angular/core/testing';

import { ComponentsDataService } from './components-data.service';

describe('ComponentsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentsDataService]
    });
  });

  it('should be created', inject([ComponentsDataService], (service: ComponentsDataService) => {
    expect(service).toBeTruthy();
  }));
});
