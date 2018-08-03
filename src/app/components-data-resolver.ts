import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { ComponentData, ComponentsDataService } from './components-data.service';

@Injectable()
export class ComponentsDataResolver implements Resolve<Observable<{key: ComponentData}>> {
    constructor(private componentsDataService: ComponentsDataService) {}
  
    resolve() {
      return this.componentsDataService.get()
    }
  }