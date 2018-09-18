import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from './app.module';

@Injectable()
export class EditorResolver implements Resolve<Observable<{}>> {
    constructor(private http: HttpClient) {}
  
    resolve(route: ActivatedRouteSnapshot) {
        return this.http.get(API_ROOT + "/projects/" + route.params["projectId"]).map((project:any)=>{
            

            let result =  {     // 初期値
                scenes: {
                    "メインシーン": {}
                },
                defaultSceneName: "メインシーン"
            }
            if (project.data) {
                let projectJson = JSON.parse(project.data.replace(/=>/g, ":"))
                if (projectJson.scenes) {
                    result = projectJson
                }
            }

            return result


        })
    }
  }