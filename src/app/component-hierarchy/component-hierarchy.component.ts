import { InlayComponent } from 'inlay-runner/src/app/inlay-component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ComponentData, ComponentsDataService } from 'inlay-runner';
import { ProjectManagerService } from 'inlay-runner';


@Component({
    selector: 'component-hierarchy',
    templateUrl: './component-hierarchy.component.html',
    styleUrls: ['./component-hierarchy.component.css']
})
export class ComponentHierarchyComponent implements OnInit {
    /**
     * コンポーネントのデータ
     *
     * @type {{[key:string]: ComponentData}}
     * @memberof ComponentHierarchyComponent
     */
    componentsData: { [key: string]: ComponentData } = null

    private _components: { [key: string]: InlayComponent } = null
    /**
     * 画面上のコンポーネントのリスト
     *
     * @memberof ComponentHierarchyComponent
     */
    get components() {
        return this._components
    }
    set components(newVal: { [key: string]: InlayComponent }) {
        this._components = newVal
        this._componentsKeys = Object.keys(newVal)
    }

    private _componentsKeys: string[] = null
    /**
     * 画面上のコンポーネントのキーのリスト (readonly)
     *
     * @memberof ComponentHierarchyComponent
     */
    get componentsKeys() {
        return this._componentsKeys
    }
    set componentsKeys(newVal: string[]) { }

    /**
     * 選択されている要素のID
     *
     * @type {string}
     * @memberof ComponentHierarchyComponent
     */
    selectedComponentId: string = null

    constructor(private componentsDataService: ComponentsDataService, private projectManagerService: ProjectManagerService) { }

    ngOnInit() {
        this.componentsData = this.componentsDataService.get()
        this.reloadHierarchy()

        this.projectManagerService.componentSelectedObservable.subscribe((data) => {
            this.selectedComponentId = data.id
        })
    }

    /**
     * コンポーネントを画面に追加する
     *
     * @param {ComponentType} componentType 追加するコンポーネントのタイプ
     * @memberof ComponentHierarchyComponent
     */
    addComponent(componentType: string) {
        this.projectManagerService.getCurrentScene().addComponent(componentType);
        this.reloadHierarchy()
    }

    /**
     * 画面上のコンポーネントを再読込する
     *
     * @memberof ComponentHierarchyComponent
     */
    reloadHierarchy() {
        const currentScreen = this.projectManagerService.getCurrentScene()
        if (currentScreen) {
            this.components = currentScreen.components
        }
    }

    onComponentSelected(component: InlayComponent) {
        component.focus()
    }
}