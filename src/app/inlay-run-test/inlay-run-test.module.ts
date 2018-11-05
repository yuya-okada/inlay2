import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';
import { ProjectManagerService } from 'inlay-runner/src/app/project-manager.service';
import { SceneManagerService } from 'inlay-runner/src/app/scene-manager.service';
import { DirectivesDataService } from 'inlay-runner/src/app/directives-data.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    DndModule.forRoot(),
    FormsModule
  ],
  providers: [
    ProjectManagerService,
    SceneManagerService,
    DirectivesDataService
  ],

})
export class InlayRunTestModule { }
