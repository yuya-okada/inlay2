import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildProgressDialogComponent } from './build-progress-dialog.component';

describe('BuildProgressDialogComponent', () => {
  let component: BuildProgressDialogComponent;
  let fixture: ComponentFixture<BuildProgressDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildProgressDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildProgressDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
