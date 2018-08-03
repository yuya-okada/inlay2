import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { InlayDirective } from '../run/inlay-directive';
import { DirectivePropertyData } from '../directives-data.service';
import { InlayDirectiveProperty } from '../inlay-directive-property';

@Component({
  selector: 'inlay-directive',
  templateUrl: './inlay-directive.component.html',
  styleUrls: ['./inlay-directive.component.css']
})
export class InlayDirectiveComponent implements OnInit {
  /**
   * 表示するディレクティブ
   * 
   * @type {InlayDirective}
   * @memberof InlayDirectiveComponent
   */
  @Input() directive: InlayDirective;

  constructor() { }

  ngOnInit() {
  }

  /**
   * プロパティの値が変更された場合
   * 
   * @memberof InlayDirectiveComponent
   */

   
  onPropertyChanged(data: {newVal: any, property: InlayDirectiveProperty, id: string}) {
    if (this.directive) {
      this.directive.onPropertyChanged(data)
    }
  }

}


