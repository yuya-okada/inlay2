import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ScreenComponent } from '../run/screen/screen.component';
import { ProjectManagerService } from '../run/project-manager.service';
import { SceneManager } from '../run/scene-manager.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-design-mode',
  templateUrl: './design-mode.component.html',
  styleUrls: ['./design-mode.component.css']
})
export class DesignModeComponent implements OnInit {
  @ViewChild(ScreenComponent) screenComponent: ScreenComponent
  currentSceneName:string = ""
  sceneNames: string[] = []

  constructor(private projectManagerService: ProjectManagerService, public dialog: MatDialog, private snackBar: MatSnackBar, private route: ActivatedRoute) {}

  ngOnInit() {

    $(() => {
      $(window).on("resize", () => {
        this.screenComponent.resize()
      })

      this.screenComponent.resize()

    })

    this.sceneNames = Object.keys(this.projectManagerService.scenes)

    this.projectManagerService.screenComponent = this.screenComponent
    this.loadScene(this.projectManagerService.currentSceneName)
  }

  loadScene(name: string) {
    const scene = this.projectManagerService.scenes[name]
    this.projectManagerService.loadScene(name)
    this.currentSceneName = name
  }

  showNewSceneDialog() {
    let dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '250px',
      data: {
        title: "新しいシーン",
        body: "シーンを入力",
        value: ""
      }
    });

    dialogRef.afterClosed().subscribe((result) => this.newScene(result));
  }

  private newScene(name: string) {
    if (this.sceneNames.indexOf(name) == -1) {
      const scene = this.projectManagerService.newScene(name)
      this.sceneNames.push(name);
    } else {
      this.snackBar.open("すでに存在する名前です", null, {
        duration: 2000,
      });
    }
  }

}
