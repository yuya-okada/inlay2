import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectivePropertyTextComponent } from './inlay-directive-property-text.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('InlayDirectivePropertyTextComponent', () => {
  let component: InlayDirectivePropertyTextComponent;
  let fixture: ComponentFixture<InlayDirectivePropertyTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectivePropertyTextComponent ],
      imports: [InlayTestModule, MatInputModule, FormsModule]
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
