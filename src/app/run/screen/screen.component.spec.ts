import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenComponent } from './screen.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectManagerService } from '../project-manager.service';
import { ComponentsDataService } from '../../components-data.service';
import { InlayTestModule } from '../../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../../inlay-run-test/inlay-run-test.module';

describe('ScreenComponent', () => {
  let component: ScreenComponent;
  let fixture: ComponentFixture<ScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenComponent ],
      imports: [
        InlayTestModule, InlayRunTestModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
