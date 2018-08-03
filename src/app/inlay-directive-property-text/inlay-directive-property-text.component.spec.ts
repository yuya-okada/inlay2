import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectivePropertyTextComponent } from './inlay-directive-property-text.component';

describe('InlayDirectivePropertyTextComponent', () => {
  let component: InlayDirectivePropertyTextComponent;
  let fixture: ComponentFixture<InlayDirectivePropertyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectivePropertyTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayDirectivePropertyTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
