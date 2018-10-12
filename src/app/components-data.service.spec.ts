import { TestBed, inject } from '@angular/core/testing';

import { ComponentsDataService } from './components-data.service';
import { HttpModule, Http } from '@angular/http';
import { AppModule } from './app.module';
import { InlayRunTestModule } from './inlay-run-test/inlay-run-test.module';
import { InlayTestModule } from './inlay-test/inlay-test.module';

describe('ComponentsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ComponentsDataService
      ],
      imports: [
        InlayRunTestModule, InlayTestModule
      ]
    });
  });

  it('should be created', inject([ComponentsDataService], (service: ComponentsDataService) => {
    expect(service).toBeTruthy();
  }));
});
