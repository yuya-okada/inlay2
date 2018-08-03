import { Injectable } from '@angular/core';
import { ComponentData, ComponentsDataService } from '../components-data.service';
import { Subject } from 'rxjs/Subject';
import { ScreenComponent } from './screen/screen.component';
import { SceneManager, SceneManagerService } from './scene-manager.service';
import { InlayScript } from '../run/inlay-script';

@Injectable()
export class ProjectManagerService {
  /**
   * コンポーネントの設定データ(read only)
   * 
   * @type {{key?: ComponentData}}
   * @memberof ProjectManagerService
   */
  private componentsData: {key?: ComponentData} = {};
  public scenes: {key?:SceneManager} = {}
  public currentSceneName = ""
  public scripts: {key?: InlayScript} = {}
  
  constructor(private componentsDataService:ComponentsDataService, private sceneManagerService: SceneManagerService) {
    this.componentsDataService.get().subscribe((res: {key: ComponentData}) => {
      this.componentsData = res;
    });
  }
  /**
   * 新しい画面を作る
   * 
   * @param {string} name 
   * @returns {SceneManager} 
   * @memberof ProjectManagerService
   */
  newScene(name:string):SceneManager {
    let sceneManager = this.sceneManagerService.getInstance()
    this.scenes[name] = sceneManager
    return sceneManager
  }

  /**
   * 現在の画面を設定する 
   * 
   * @param {string} name 
   * @returns {SceneManager} 
   * @memberof ProjectManagerService
   */
  setScene(name:string):SceneManager {
    this.currentSceneName = name
    return this.scenes[name]
  }

  /**
   * 現在の画面を返す
   * 
   * @returns {SceneManager} 
   * @memberof ProjectManagerService
   */
  getCurrentScene():SceneManager {
    return this.scenes[this.currentSceneName]
  }

  /**
   * 現在の画面のコンポーネントを返す
   * 
   * @returns {ScreenComponent} 
   * @memberof ProjectManagerService
   */
  getCurrentSceneComponent():ScreenComponent {
    return this.scenes[this.currentSceneName].targetScreenComponent
  }



  /**
   * 新しいスクリプトを作成
   * 
   * @param {string} scriptName 
   * @memberof ProjectManagerService
   */
  newScripts(scriptName: string) :InlayScript {
    const script = new InlayScript("", "")
    this.scripts[scriptName] = script;
    return script
  }


}
