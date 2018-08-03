import { NgModule, Provider, ComponentFactory } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { InlayButtonComponent } from './inlay-button/inlay-button.component';
import { ProjectManagerService } from './project-manager.service';
import { SceneManagerService } from './scene-manager.service';
import { DirectivesDataService } from '../directives-data.service';
import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DndModule.forRoot()
  ],
  declarations: [
    InlayButtonComponent
  ],
  providers: [
    ProjectManagerService,
    SceneManagerService,
    DirectivesDataService
  ],
  bootstrap: [
    InlayButtonComponent
  ]
})
export class RunModule { }











