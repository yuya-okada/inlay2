import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ROOT } from './app.module';
import { SessionService } from './session.service';

@Injectable()
export class ProjectsResolver implements Resolve<Observable<{}>> {
    constructor(private http: HttpClient, private sessionService: SessionService) {}
  
    resolve() {
      return this.http.get(API_ROOT + "/projects", {
        headers: this.sessionService.getAuthenticateHeader(),
        observe: 'response'
      }).map((res) => {
        console.log(res)
        this.sessionService.setSession(res.headers)
        return res.body
      })
    }
  }