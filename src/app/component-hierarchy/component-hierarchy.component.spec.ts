import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHierarchyComponent } from './component-hierarchy.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { MaterialModule } from '../material/material.module';
import { InlayDirectiveComponent } from '../inlay-directive/inlay-directive.component';
import { KeysPipe } from '../keys.pipe';
import { InlayDirectivePropertyComponent } from '../inlay-directive-property/inlay-directive-property.component';

describe('ComponentHierarchyComponent', () => {
  let component: ComponentHierarchyComponent;
  let fixture: ComponentFixture<ComponentHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHierarchyComponent, InlayDirectiveComponent, KeysPipe, InlayDirectivePropertyComponent ],
      imports: [InlayTestModule, MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
