import { Component, OnInit, ElementRef, ComponentFactoryResolver, ViewContainerRef, Type, ComponentFactory, ComponentRef, ViewChild, Input } from '@angular/core';
import * as $ from "jquery";
import { ProjectManagerService } from '../project-manager.service';
import { ComponentData, ComponentsDataService } from '../../components-data.service';
import { InlayComponent } from '../inlay-component';
import { InlayButtonComponent } from '../inlay-button/inlay-button.component';
import { ActivatedRoute } from '@angular/router';
import { SceneManager } from '../scene-manager.service';

@Component({
  selector: 'screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css']
})
export class ScreenComponent implements OnInit {
  @Input() components;

  /**
   * この要素の下に新しいコンポーネントを挿入する
   * 
   * @private
   * @type {ViewContainerRef}
   * @memberof ScreenComponent
   */
  @ViewChild('componentInsertMarker', { read: ViewContainerRef }) private componentInsertMarkerRef: ViewContainerRef;

  /**
   * ScreenComponentのルート要素
   * 
   * @private
   * @type {JQuery}
   * @memberof ScreenComponent
   */
  private element: JQuery;
  /**
   * Screenの描画療育の要素
   * 
   * @private
   * @type {JQuery}
   * @memberof ScreenComponent
   */
  private screen:JQuery;

  private componentsData :{key: ComponentData} = null
  
  marginLeft: number;
  ratio: number;

  constructor(
    private elementRef: ElementRef,
    private route: ActivatedRoute,
    private projectManagerService: ProjectManagerService
  )
  { }

  ngOnInit() {
    console.log(this.route.snapshot.data)
    this.componentsData = this.route.snapshot.data.componentsData;

    // elementとscreenプロパティを初期化
    $(() => {
      this.element = $(this.elementRef.nativeElement);
      this.screen = this.element.find("#screen");
      console.log(this.screen)
    });


  }

  /**
   * 指定したシーンを読み込み、表示する
   *
   * @param {string} name
   * @memberof ScreenComponent
   */
  loadScene(name:string) {

    const currentScene: SceneManager = this.projectManagerService.scenes[name]

    // もしシーンが初期化されていないなら
    if (Object.keys(currentScene.components).length == 0) {
      // for (let sceneName in this.projectManagerService.scenes) {
        this.initSceneView(name, currentScene)
      // }
      
    } else {     // すでに初期化されていれば復元する。
      this.componentInsertMarkerRef.clear()
      currentScene.restoreComponentsDom()
    }
  }

  /**
   * スクリーンのサイズをリサイズする
   * 
   * @memberof ScreenComponent
   */
  resize () {
    if (!this.screen) {   // jQueryが初期化されるまでウェイト
      setTimeout(() => this.resize(), 100)
      return
    }
    var height:number = this.screen.height();
    var wrapperHeight:number = this.element.height();
    this.ratio = (wrapperHeight - 50) / height;
    this.marginLeft = (this.element.width() - this.screen.width() * this.ratio) / 2;
  }


  addComponent(componentFactory: ComponentFactory<InlayComponent>, componentType:string): ComponentRef<InlayComponent> {
    console.log(this.componentInsertMarkerRef)
    const componentRef = this.componentInsertMarkerRef.createComponent(componentFactory);
    componentRef.instance.type = componentType

    return componentRef
  }



  /**
   * シーンのプレビューを初期化。
   *
   * @private
   * @memberof DesignModeComponent
   */
  private initSceneView(sceneName:string, scene: SceneManager) {
    
    this.route.parent.data.subscribe((data) => {
      this.componentInsertMarkerRef.clear()
      $(".inlay-component").remove()
      const scenes =  data.projectData.scenes[sceneName] || {}
      for (let componentId in scenes) {
        scene.addComponentFromJson(componentId, scenes[componentId])
      }    

    });
  }

}
