import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayDirectivePropertyComponent } from './inlay-directive-property.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';

describe('InlayDirectivePropertyComponent', () => {
  let component: InlayDirectivePropertyComponent;
  let fixture: ComponentFixture<InlayDirectivePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayDirectivePropertyComponent ],
      imports: [InlayTestModule]
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
