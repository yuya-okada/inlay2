import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_ROOT } from '../app.module';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects = []

  constructor(public dialog: MatDialog, public route: ActivatedRoute, public http: HttpClient, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.data.projectsData)
    this.projects = this.route.snapshot.data.projectsData

  }

  newProject() {

    let dialogRef = this.dialog.open(PromptDialogComponent, {
      width: '250px',
      data: {
        title: "新しいプロジェクト",
        body: "プロジェクト名を入力",
        value: ""
      }
    });

    dialogRef.afterClosed().subscribe((result) => this.createProject(result));
  }

  createProject(result: string) {
    let httpParams = new HttpParams()
      .append("name", result)
      .append("data", '{}');

    console.log(httpParams);
    this.http.post(API_ROOT + "/projects", httpParams, {
      headers: this.sessionService.getAuthenticateHeader()
    }).subscribe((data) => {
      this.projects.push({
        name: result,
        data: {}
      })
      this.sessionService.setSession(data["headers"])
    })
  }
  goToEditor(projectId: number) {
    this.router.navigate(["editor", projectId, "design"])
  }
}
