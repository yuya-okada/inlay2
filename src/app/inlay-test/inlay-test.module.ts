import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DndModule } from "ng2-dnd";

import { MaterialModule } from '../material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsDataResolver } from '../components-data-resolver';
import { ProjectsResolver } from '../projects-resolver';
import { HttpClientModule } from '@angular/common/http';
import { EditorResolver } from '../editor-resolver';

import { SessionService } from '../session.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule, MatIconModule, MatTabsModule, MatInput, MatInputModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ComponentsDataService } from 'inlay-runner/src/app/components-data.service';
@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientTestingModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    RouterTestingModule,
    // RouterModule.forChild(appRoutes),
    DndModule.forRoot(), // ドラッグアンドドロップ
    MatMenuModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatMenuModule
  ],
  providers: [
    ComponentsDataService,
    ComponentsDataResolver,
    EditorResolver,
    ProjectsResolver,
    SessionService
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class InlayTestModule { }
