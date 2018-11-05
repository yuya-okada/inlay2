import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Injectable } from '@angular/core';
import { ComponentsDataService } from 'inlay-runner';
import { ComponentData } from 'inlay-runner/src/app/components-data.service';

@Injectable()
export class ComponentsDataResolver implements Resolve<Observable<{ [key: string]: ComponentData }>> {
  constructor(private componentsDataService: ComponentsDataService) { }

  resolve() {
    return new Observable<{ [key: string]: ComponentData }>((observer) => {
      observer.next(this.componentsDataService.get())
    })

  }
}