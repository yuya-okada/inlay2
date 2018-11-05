import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectiveComponent } from './inlay-directive.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';
import { MatInput, MatInputModule, MatExpansionModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { KeysPipe } from '../keys.pipe';
import { InlayDirectivePropertyComponent } from '../inlay-directive-property/inlay-directive-property.component';

describe('InlayDirectiveComponent', () => {
  let component: InlayDirectiveComponent;
  let fixture: ComponentFixture<InlayDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InlayDirectiveComponent, KeysPipe, InlayDirectivePropertyComponent],
      imports: [
        InlayTestModule,
        InlayRunTestModule,
        FormsModule,
        MatInputModule,
        MatIconModule,
        MatExpansionModule
      ],
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
