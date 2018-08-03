import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectivePropertyComponent } from './inlay-directive-property.component';

describe('InlayDirectivePropertyComponent', () => {
  let component: InlayDirectivePropertyComponent;
  let fixture: ComponentFixture<InlayDirectivePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectivePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayDirectivePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
