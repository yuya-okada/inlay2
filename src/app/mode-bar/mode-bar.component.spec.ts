import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeBarComponent } from './mode-bar.component';

describe('ModeBarComponent', () => {
  let component: ModeBarComponent;
  let fixture: ComponentFixture<ModeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeBarComponent ]
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
