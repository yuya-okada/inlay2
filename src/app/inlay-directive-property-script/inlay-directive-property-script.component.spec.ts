import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectivePropertyScriptComponent } from './inlay-directive-property-script.component';

describe('InlayDirectivePropertyScriptComponent', () => {
  let component: InlayDirectivePropertyScriptComponent;
  let fixture: ComponentFixture<InlayDirectivePropertyScriptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectivePropertyScriptComponent ]
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
