import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockModeComponent } from './block-mode.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { ScriptsListComponent } from '../scripts-list/scripts-list.component';

describe('BlockModeComponent', () => {
  let component: BlockModeComponent;
  let fixture: ComponentFixture<BlockModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockModeComponent, WorkspaceComponent, ScriptsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockModeComponent);
    // component = fixture.componentInstance;
    console.log(fixture)
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  // });
});
