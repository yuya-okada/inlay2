import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

@Injectable()
export class DirectivesDataService {

  private _directivesData: {key: DirectiveData};

  constructor(private http:Http) { }

  /**
   * ディレクティブのデータを持つObservableを返す
   * 
   * @returns {Observable<{key: DirectiveData}>} 
   * @memberof DirectivesDataService
   */
  public get() :Observable<{key: DirectiveData}> {
    return new Observable(observer => {
      if (this._directivesData) {
        observer.next(this._directivesData);
        return observer.complete();
      }
      this.http
        .get("assets/consts/directives-data.json")
        .map(response => response.json())
        .subscribe((directivesData: {key: DirectiveData}) => {
          this._directivesData = directivesData;
          observer.next(this._directivesData);
          observer.complete();
        });
    });
  }

}

export interface DirectiveData {
  name: string,
  icon: string,
  properties: DirectivePropertyData[]
}

export interface DirectivePropertyData {
  type: string,
  text: string,
  initialValue?: any,
  resultType?: string,     // style, attr, class, none ...
  result?: string
}
