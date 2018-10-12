import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptsListComponent } from './scripts-list.component';
import { MaterialModule } from '../material/material.module';
import { ProjectManagerService } from '../run/project-manager.service';
import { ComponentsDataService } from '../components-data.service';
import { AppModule } from '../app.module';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';

describe('ScriptsListComponent', () => {
  let component: ScriptsListComponent;
  let fixture: ComponentFixture<ScriptsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptsListComponent ],
      providers: [
        ProjectManagerService,
        ComponentsDataService
      ],
      imports: [
        MaterialModule,
        InlayTestModule,
        InlayRunTestModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
