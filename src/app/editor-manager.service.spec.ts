import { TestBed, inject } from '@angular/core/testing';

import { EditorManagerService } from './editor-manager.service';

describe('EditorManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditorManagerService]
    });
  });

  it('should be created', inject([EditorManagerService], (service: EditorManagerService) => {
    expect(service).toBeTruthy();
  }));
});
