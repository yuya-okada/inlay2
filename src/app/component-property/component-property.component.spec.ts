import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPropertyComponent } from './component-property.component';
import { InlayDirectiveComponent } from '../inlay-directive/inlay-directive.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';
import { MaterialModule } from '../material/material.module';
import { MatExpansionModule, MatIconModule } from '@angular/material';
import { KeysPipe } from '../keys.pipe';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ComponentPropertyComponent', () => {
  let component: ComponentPropertyComponent;
  let fixture: ComponentFixture<ComponentPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentPropertyComponent, InlayDirectiveComponent, KeysPipe ],
      imports: [InlayTestModule, InlayRunTestModule, MatExpansionModule, MatIconModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
