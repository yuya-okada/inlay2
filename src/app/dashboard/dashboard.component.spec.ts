import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';
import { MatCardModule, MatIconModule } from '@angular/material';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent],
      imports: [InlayTestModule, InlayRunTestModule, MatCardModule, MatIconModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
