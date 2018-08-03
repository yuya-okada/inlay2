import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHierarchyComponent } from './component-hierarchy.component';

describe('ComponentHierarchyComponent', () => {
  let component: ComponentHierarchyComponent;
  let fixture: ComponentFixture<ComponentHierarchyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentHierarchyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
