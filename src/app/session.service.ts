import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs/Subject';
import { API_ROOT } from './app.module';

@Injectable()
export class SessionService implements CanActivate {
  private accessToken = ""
  private client = ""
  private uid = ""

  constructor(private router: Router, private cookieService: CookieService, private http: HttpClient) {

    this.accessToken = this.cookieService.get("accessToken");
    this.client = this.cookieService.get("client");
    this.uid = this.cookieService.get("uid");

  }

  /**
   * ログインされているか
   *
   * @returns SubjectM{boolean>}
   * @memberof SessionService
   */
  canActivate(): Subject<boolean> {
    const promise = new Subject<boolean>()

    if (this.accessToken && this.client && this.uid) {

      this.http.get(API_ROOT + "/user", {
        headers: this.getAuthenticateHeader(),
        observe: 'response'
      }).subscribe((res) => {
        this.setSession(res["headers"])
        promise.next(true)
      }, (error) => {
        this.router.navigate(['/login'])
        promise.next(false)
      })
    } else {
      this.router.navigate(['/login'])
      promise.next(false)
    }

    return promise

  }

  /**
   * 認証データをセット
   *
   * @param {string} accessToken
   * @param {string} client
   * @param {string} uid
   * @memberof SessionService
   */
  setSession(headers: HttpHeaders) {
    console.log("set session", headers.get("uid"));

    if (headers && headers.get("access-token")) {

      this.accessToken = headers.get("access-token")
      this.client = headers.get("client")
      this.uid = headers.get("uid")

      this.cookieService.set("accessToken", this.accessToken);
      this.cookieService.set("client", this.client);
      this.cookieService.set("uid", this.uid);

    }
  }

  /**
   * アクセストークンを取得
   *
   * @returns {string}
   * @memberof SessionService
   */
  getAccessToken(): string {
    return this.accessToken
  }

  /**
   * clientを取得
   *
   * @returns {string}
   * @memberof SessionService
   */
  getClient(): string {
    return this.client
  }

  /**
   * uidを取得
   *
   * @returns {string}
   * @memberof SessionService
   */
  getUid(): string {
    return this.uid
  }


  getAuthenticateHeader(): HttpHeaders {
    const header = new HttpHeaders()
    console.log("get", this.accessToken, this.client, this.uid);
    return header.set("access-token", this.accessToken)
      .set("client", this.client)
      .set("uid", this.uid)
  }


}
