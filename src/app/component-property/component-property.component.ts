import { Component, OnInit } from '@angular/core';
import { InlayDirective } from 'inlay-runner';
import { ProjectManagerService } from 'inlay-runner';
import { InlayComponent } from 'inlay-runner/src/app/inlay-component';


@Component({
  selector: 'component-property',
  templateUrl: './component-property.component.html',
  styleUrls: ['./component-property.component.css']
})
export class ComponentPropertyComponent implements OnInit {
  /**
   * 現在選択中のコンポーネント
   *
   * @private
   * @type {InlayComponent}
   * @memberof ComponentPropertyComponent
   */
  private currentComponent: InlayComponent;
  /**
   * 表示されるディレクティブのリスト
   *
   * @type {InlayDirective[]}
   * @memberof ComponentPropertyComponent
   */
  public directives: InlayDirective[] = []

  constructor(
    private projectManagerService: ProjectManagerService
  ) { }

  ngOnInit() {
    // 選択中の要素が変更されたときトリガーされる
    this.projectManagerService.componentSelectedObservable.subscribe((data) => {
      this.currentComponent = data.component
      this.directives = data.component.directives
    })
  }
  /**
   * 現在選択されている要素に新しいスクリプト作成してアタッチ
   *
   * @memberof ComponentPropertyComponent
   */
  addNewScript() {
    this.currentComponent.addCustomDirective()
  }

}
