import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { InlayButtonComponent } from '../run/inlay-button/inlay-button.component';
import { ProjectManagerService } from '../run/project-manager.service';
import { SceneManagerService } from '../run/scene-manager.service';
import { DirectivesDataService } from '../directives-data.service';
import { DndModule } from 'ng2-dnd';
import { FormsModule } from '@angular/forms';

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
