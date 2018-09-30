import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SessionService {
  private accessToken = ""
  private client = ""
  private uid = ""

  constructor() { }

  /**
   * ログインされているか
   *
   * @returns {boolean}
   * @memberof SessionService
   */
  isActive() :boolean {
    if (this.accessToken && this.client && this.uid) {
      return true
    }
    return false
  }

  /**
   * 認証データをセット
   *
   * @param {string} accessToken
   * @param {string} client
   * @param {string} uid
   * @memberof SessionService
   */
  setSession(accessToken:string, client:string, uid:string) {
    this.accessToken = accessToken
    this.client = client 
    this.uid = uid
  }

  /**
   * アクセストークンを取得
   *
   * @returns {string}
   * @memberof SessionService
   */
  getAccessToken():string {
    return this.accessToken
  }

  /**
   * clientを取得
   *
   * @returns {string}
   * @memberof SessionService
   */
  getClient():string {
    return this.client
  }

  /**
   * uidを取得
   *
   * @returns {string}
   * @memberof SessionService
   */
  getUid():string {
    return this.uid
  }


  getAuthenticateHeader(): HttpHeaders {
    const header = new HttpHeaders()
    return header.set("access-token", this.accessToken)
      .set("client", this.client)
      .set("uid", this.uid)
  }


}
