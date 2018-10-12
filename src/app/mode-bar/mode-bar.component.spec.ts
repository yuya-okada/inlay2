import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeBarComponent } from './mode-bar.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { MaterialModule } from '../material/material.module';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs/observable/of';

describe('ModeBarComponent', () => {
  let component: ModeBarComponent;
  let fixture: ComponentFixture<ModeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeBarComponent ],
      imports: [InlayTestModule, MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
