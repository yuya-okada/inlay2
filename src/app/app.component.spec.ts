/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ComponentsDataService } from './components-data.service';
import { EditorManagerService } from './editor-manager.service';
import { ComponentsDataResolver } from './components-data-resolver';
import { EditorResolver } from './editor-resolver';
import { ProjectsResolver } from './projects-resolver';
import { SessionService } from './session.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { DndModule } from 'ng2-dnd';
import { RunModule } from './run/run.module';
import { DirectivesDataService } from './directives-data.service';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        DirectivesDataService,
        ComponentsDataService, 
        EditorManagerService,
        ComponentsDataResolver, 
        EditorResolver,
        ProjectsResolver,
        SessionService
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterTestingModule,
        DndModule.forRoot(), // ドラッグアンドドロップ
        RunModule
      ],
      
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
