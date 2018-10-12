import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignModeComponent } from './design-mode.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';
import { MatMenuModule, MatIconModule, MatTab, MatTabsModule } from '@angular/material';
import { ComponentHierarchyComponent } from '../component-hierarchy/component-hierarchy.component';
import { ScreenComponent } from '../run/screen/screen.component';
import { ComponentPropertyComponent } from '../component-property/component-property.component';
import { KeysPipe } from 'app/keys.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';
import { MaterialModule } from '../material/material.module';

describe('DesignModeComponent', () => {
  let component: DesignModeComponent;
  let fixture: ComponentFixture<DesignModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignModeComponent, ComponentHierarchyComponent, ScreenComponent, ComponentPropertyComponent, KeysPipe ],
      imports: [InlayTestModule, InlayRunTestModule, FormsModule, MaterialModule, MatMenuModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
