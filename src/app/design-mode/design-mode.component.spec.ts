import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignModeComponent } from './design-mode.component';

describe('DesignModeComponent', () => {
  let component: DesignModeComponent;
  let fixture: ComponentFixture<DesignModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
