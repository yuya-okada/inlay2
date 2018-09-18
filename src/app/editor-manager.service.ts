import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { InlayComponent } from './run/inlay-component';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class EditorManagerService {

  public selectedComponentSource = new Subject<{id: string, component:InlayComponent}>()
  public componentSelectedObservable = this.selectedComponentSource.asObservable();

  constructor() { }

}
