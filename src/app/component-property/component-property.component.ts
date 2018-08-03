import { Component, OnInit, ViewContainerRef, ComponentFactory, ViewChild, ComponentFactoryResolver, ViewEncapsulation } from '@angular/core';
import { ProjectManagerService } from '../run/project-manager.service';
import { InlayComponent } from '../run/inlay-component';
import { InlayDirective } from '../run/inlay-directive';
import { InlayDirectiveComponent } from '../inlay-directive/inlay-directive.component';
import { InlayButtonComponent } from '../run/inlay-button/inlay-button.component';
import { MatDialog } from '@angular/material';

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
    private projectManagerService: ProjectManagerService,
    private viewContainerRef:ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    const currentScreen = this.projectManagerService.getCurrentScene()

    // 選択中の要素が変更されたときトリガーされる
    currentScreen.componentSelectedObservable.subscribe((data) => {
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
