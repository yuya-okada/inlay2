import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptDialogComponent } from './prompt-dialog.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatDialogModule } from '@angular/material';

describe('PromptDialogComponent', () => {
  let component: PromptDialogComponent;
  let fixture: ComponentFixture<PromptDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromptDialogComponent ],
      imports: [InlayTestModule, InlayRunTestModule, FormsModule, MaterialModule, MatDialogModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptDialogComponent);
    // component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
