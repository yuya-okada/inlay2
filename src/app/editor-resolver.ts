import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from './app.module';
import { SessionService } from './session.service';

@Injectable()
export class EditorResolver implements Resolve<Observable<{}>> {
    constructor(private http: HttpClient, private sessionService: SessionService) {}
  
    resolve(route: ActivatedRouteSnapshot) {
        return this.http.get(API_ROOT + "/projects/" + route.params["projectId"], {
            headers: this.sessionService.getAuthenticateHeader(),
            observe: 'response'
          }).map((res:any)=>{
            this.sessionService.setSession(res.headers)
            let result =  {     // 初期値
                scenes: {
                    "メインシーン": {}
                },
                defaultSceneName: "メインシーン"
            }
            const projectData = res.body!.data
            if (projectData) {
                let projectJson = JSON.parse(projectData.replace(/=>/g, ":"))
                if (projectJson.scenes) {
                    result = projectJson
                }
            }

            return result


        })
    }
  }