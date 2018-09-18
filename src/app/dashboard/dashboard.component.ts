import { Component, OnInit } from '@angular/core';
import { MatDialog } from '../../../node_modules/@angular/material';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_ROOT } from '../app.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projects = []

  constructor(public dialog: MatDialog, public route: ActivatedRoute, public http: HttpClient) { }

  ngOnInit() {
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
    this.http.post(API_ROOT + "/projects", httpParams).subscribe((data)=> {
    })
  }
}
