import { Component, OnInit, ViewChild, ContentChild } from '@angular/core';
import { ProjectManagerService } from '../run/project-manager.service';
import { ActivatedRoute } from '@angular/router';
import { API_ROOT } from '../app.module';
import { SessionService } from '../session.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  
  /**
   * プロジェクト名
   *
   * @type {string}
   * @memberof EditorComponent
   */
  projectName:string = ""

  projectData:any = {}

  constructor(private projectManagerService: ProjectManagerService, private route: ActivatedRoute, private sessionService: SessionService, private http: HttpClient) {}

  ngOnInit() {
    this.projectData = this.route.snapshot.data.projectData
    console.log("プロジェクトデータ：", this.projectData)

    this.projectManagerService.defaultSceneName = this.projectData.defaultSceneName
    for (let sceneName in this.projectData.scenes) {
      this.projectManagerService.newScene(sceneName)
      if (this.projectManagerService.defaultSceneName == sceneName) {
        this.projectManagerService.currentSceneName = sceneName
      }
    }

    this.projectManagerService.scripts = this.projectData.scripts

  }


  /**
   * プロジェクトを保存しサーバーに送信
   *
   * @memberof EditorComponent
   */
  save() {
    let projectJson = this.projectManagerService.toJson()
    console.log(projectJson)
    this.http.put(API_ROOT + "/projects/" + this.route.snapshot.params["projectId"], {
      "data": projectJson,
      "name": this.projectName
    },{
      headers: this.sessionService.getAuthenticateHeader(),
      observe: 'response'
    }).subscribe((res) => {
      this.sessionService.setSession(res.headers)
      console.log("done")
    })
  }

}