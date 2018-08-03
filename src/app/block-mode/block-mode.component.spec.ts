import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockModeComponent } from './block-mode.component';

describe('BlockModeComponent', () => {
  let component: BlockModeComponent;
  let fixture: ComponentFixture<BlockModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
