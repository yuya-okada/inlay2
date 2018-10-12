import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlayButtonComponent } from './inlay-button.component';
import { InlayTestModule } from '../../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../../inlay-run-test/inlay-run-test.module';

describe('InlayButtonComponent', () => {
  let component: InlayButtonComponent;
  let fixture: ComponentFixture<InlayButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlayButtonComponent ],
      imports: [
        InlayTestModule, InlayRunTestModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
