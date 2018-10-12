import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorComponent } from './editor.component';
import { InlayTestModule } from '../inlay-test/inlay-test.module';
import { InlayRunTestModule } from '../inlay-run-test/inlay-run-test.module';
import { ModeBarComponent } from '../mode-bar/mode-bar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

describe('EditorComponent', () => {
  let component: EditorComponent;
  let fixture: ComponentFixture<EditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorComponent, ModeBarComponent ],
      imports: [InlayTestModule, InlayRunTestModule, RouterTestingModule, MatIconModule],
      providers : [
        {
           provide: ActivatedRoute,
           useFactory: () => ({
            snapshot: {
              data: {
                projectData: { 
                  scenes: {
                      "メインシーン": {}
                  },
                  defaultSceneName: "メインシーン"
                }
              }
            }
           })
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
