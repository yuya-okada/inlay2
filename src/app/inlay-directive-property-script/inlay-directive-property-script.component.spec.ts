import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectivePropertyScriptComponent } from './inlay-directive-property-script.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { MatSelectModule } from '@angular/material';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';

describe('InlayDirectivePropertyScriptComponent', () => {
  let component: InlayDirectivePropertyScriptComponent;
  let fixture: ComponentFixture<InlayDirectivePropertyScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectivePropertyScriptComponent ],
      imports: [InlayTestModule, MatSelectModule, InlayRunTestModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayDirectivePropertyScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
