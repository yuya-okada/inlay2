import { TestBed, inject } from '@angular/core/testing';

import { SceneManagerService } from './scene-manager.service';

describe('ScenenManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SceneManagerService]
    });
  });

  it('should be created', inject([SceneManagerService], (service: SceneManagerService) => {
    expect(service).toBeTruthy();
  }));
});
