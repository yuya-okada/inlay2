import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { API_ROOT } from '../app.module';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-build-progress-dialog',
  templateUrl: './build-progress-dialog.component.html',
  styleUrls: ['./build-progress-dialog.component.css']
})
export class BuildProgressDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BuildProgressDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public projectId: (string | number),
    private http: HttpClient,
    private sessionService: SessionService
  ) { }

  ngOnInit() {
    this.http.get(API_ROOT + "/projects/download/" + this.projectId, {
      headers: this.sessionService.getAuthenticateHeader()
    }).subscribe((data) => {
      console.log(data)
      this.dialogRef.close()
    })
  }

}
