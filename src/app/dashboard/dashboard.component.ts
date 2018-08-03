import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { ScreenComponent } from '../run/screen/screen.component';
import * as $ from 'jquery';
import { ProjectManagerService } from '../run/project-manager.service';
import { SceneManager } from '../run/scene-manager.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { DesignModeComponent } from '../design-mode/design-mode.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private projectManagerService: ProjectManagerService) {}

  ngOnInit() {

    let projectData = {
      scenes: {
        "メインシーン": {
          default: true
        }
      }
    }

    for (let sceneName in projectData.scenes) {
      
      this.projectManagerService.newScene(sceneName)
      if (projectData.scenes[sceneName].default) {
        this.projectManagerService.setScene(sceneName)
      }
    }

  }

}