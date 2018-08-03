import { Injectable, Type } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import { InlayComponent } from './run/inlay-component';
import { InlayButtonComponent } from './run/inlay-button/inlay-button.component';

@Injectable()
export class ComponentsDataService {
  
  private _componentsData: {key: ComponentData};

  constructor(private http:Http) { }

  /**
   * コンポーネントのデータを持つOvserverを返す
   * 
   * @returns {Observable<ComponentData>} 
   * @memberof ComponentsDataService
   */
  public get() :Observable<{key: ComponentData}> {
    return new Observable(observer => {
      if (this._componentsData) {
        observer.next(this._componentsData);
        return observer.complete();
      }
      this.http
        .get("assets/consts/components-data.json")
        .map(response => response.json())
        .subscribe((componentsData: {key: ComponentData}) => {
          this._componentsData = componentsData;
          observer.next(this._componentsData);
          observer.complete();
        });
    });
  }

}

export interface ComponentData {
  icon: string,
  name: string,
  group?: boolean,
  width?: number,
  height?: number,
  directives?: string[]
}
