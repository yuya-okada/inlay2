import { Injectable, Type, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';

import { Component } from "@angular/core";
import { ScreenComponent } from "./screen/screen.component";
import { InlayButtonComponent } from "./inlay-button/inlay-button.component";
import { InlayComponent } from "./inlay-component";
import { ComponentsDataService, ComponentData } from "../components-data.service";
import { Subject } from 'rxjs/Subject';
import { Uuid } from '../uuid';

@Injectable()
export class SceneManagerService {

  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private componentsDataService: ComponentsDataService
  ) { }
  
  getInstance() {
    return new SceneManager(this._componentFactoryResolver, this.componentsDataService)
  }

}




export class SceneManager {
  private componentsData: {key: ComponentData}

  /**
   * 管理する対象となるScreenComponent
   * 
   * @memberof ScreenManager
   */
  private targetScreenComponent:ScreenComponent = null


  private selectedComponentSource = new Subject<{id: string, component:InlayComponent}>()
  public componentSelectedObservable = this.selectedComponentSource.asObservable();

  /**
   * 画面上のコンポーネント一覧
   * 
   * @type {InlayComponent[]}
   * @memberof ScreenManager
   */
  public components: {[key:string]: InlayComponent}  = {}

  
  constructor(
    private _componentFactoryResolver: ComponentFactoryResolver,
    private componentsDataService: ComponentsDataService
  ) {
    componentsDataService.get().subscribe((res: {key: ComponentData}) => {
      this.componentsData = res
    })
  }

  setScreenComponent(component: ScreenComponent) {
    this.targetScreenComponent = component
  }

  /**
   * 新しいコンポーネントを追加し、追加されたコンポーネントのインスタンスを返す
   * 
   * @param {string} componentType 追加するコンポーネントのタイプ
   * @returns {InlayComponent} 
   * @memberof ScreenManager
   */
  addComponent(componentType:string): InlayComponent {
    const uuid = Uuid.generate();
    const componentRef = this.initComponent(uuid, componentType)
    const componentData = this.componentsData[componentType];

    // 動的に生成したコンポーネントにパラメータを渡す
    componentRef.instance.width = componentData.width;
    componentRef.instance.height = componentData.height;
    this.onComponentFocused(uuid);
    componentRef.instance.addDirective(componentData.directives);

    return componentRef.instance
  }

  restoreComponents() {
    this.targetScreenComponent.empty()
    for (let key in this.components) {
      let component = this.components[key]
      this.restoreComponent(key, component);
    }
  }

  private restoreComponent(id: string, component: InlayComponent) {
    const newComponentRef = this.initComponent(id, component.type)
    const newInstance = newComponentRef.instance;
    const componentData = this.componentsData[component.type];
    newInstance.x = component.x;
    newInstance.y = component.y;
    newInstance.width = component.width;
    newInstance.height = component.height;
    newInstance.name = component.name;
    newInstance.options = component.options
    newInstance.setDirectives(component.directives);
  }

  private initComponent(id:string, componentType:string): ComponentRef<InlayComponent> {
    const componentRef = this.generateComponentRef(componentType)
    const componentData = this.componentsData[componentType];

    componentRef.instance.onFocusEmitter.subscribe(() => {
      this.onComponentFocused(id)
    })

    this.components[id] = componentRef.instance;
    return componentRef

  }

  private generateComponentRef(componentType: string): ComponentRef<InlayComponent> {
    let type:Type<InlayComponent> = this.getComponentType(componentType);
    let componentData: ComponentData = this.componentsData[componentType];

    // コンポーネント生成器を初期化
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(type);

    // 動的にコンポーネントを生成
    const componentRef = this.targetScreenComponent.addComponent(componentFactory, componentType);

    return componentRef;
  }

  /**
   * 特定のコンポーネントがフォーカスされたとき
   * 
   * @param {string} id 
   * @memberof SceneManager
   */
  private onComponentFocused(id: string) {
    const component:InlayComponent = this.components[id]

    for(const i in this.components) {
      if (id != i) {
        const component = this.components[i]
        component.unfocus()
      }
    }
    this.selectedComponentSource.next({
      id: id,
      component: component
    })
    
  }

  private getComponentType(componentType:string) :Type<InlayComponent> {
    switch (componentType) {
      case "button":
        return InlayButtonComponent
    }
    return
  }

}