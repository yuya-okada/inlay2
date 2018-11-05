
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { ScriptsManagerService } from 'inlay-runner';

@Component({
  selector: 'app-scripts-list',
  templateUrl: './scripts-list.component.html',
  styleUrls: ['./scripts-list.component.css']
})
export class ScriptsListComponent implements OnInit {
  @Output() loadScript = new EventEmitter<string>()
  scriptKeys: string[] = []
  currentScriptName = ""

  constructor(public dialog: MatDialog, public snackBar: MatSnackBar, private scriptsManagerService: ScriptsManagerService) { }

  ngOnInit() {
    console.log(this.scriptsManagerService)
    this.scriptKeys = Object.keys(this.scriptsManagerService.scripts);
  }

  /**
   * 新しいスクリプトを生成するダイアログを表示
   *
   * @memberof ScriptsListComponent
   */
  newScript(): void {
    let dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '250px',
      data: {
        title: "新しいブロックスクリプト",
        body: "スクリプト名を入力",
        value: ""
      }
    });

    dialogRef.afterClosed().subscribe((result) => this.createScript(result));
  }

  /**
   * 新しいスクリプトを生成
   *
   * @param {string} name
   * @memberof ScriptsListComponent
   */
  createScript(name: string) {
    if (this.scriptKeys.indexOf(name) == -1) {
      const script = this.scriptsManagerService.newScripts(name);
      this.scriptKeys.push(name);
    } else {
      this.snackBar.open("すでに存在する名前です", null, {
        duration: 2000,
      });
    }
  }

  changeScript(key: string) {
    this.currentScriptName = key
    this.loadScript.emit(key)
  }
}
