import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectiveComponent } from './inlay-directive.component';

describe('InlayDirectiveComponent', () => {
  let component: InlayDirectiveComponent;
  let fixture: ComponentFixture<InlayDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
