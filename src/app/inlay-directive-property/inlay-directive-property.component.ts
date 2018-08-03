import { Component, OnInit, Input, Output, EventEmitter, Type, ComponentFactory, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { DirectivePropertyData } from '../directives-data.service';
import { InlayDirectivePropertyTextComponent } from '../inlay-directive-property-text/inlay-directive-property-text.component';
import { InlayDirectiveProperty } from '../inlay-directive-property';
import { InlayDirectivePropertyInput } from '../inlay-directive-property-input';
import { InlayDirectivePropertyScriptComponent } from '../inlay-directive-property-script/inlay-directive-property-script.component';

@Component({
  selector: 'inlay-directive-property',
  templateUrl: './inlay-directive-property.component.html',
  styleUrls: ['./inlay-directive-property.component.css']
})
export class InlayDirectivePropertyComponent implements OnInit {

  @ViewChild("inputInsertMarker", { read: ViewContainerRef }) private inputInsertMarker: ViewContainerRef


  @Output() onPropertyChanged = new EventEmitter<{newVal: any, property: InlayDirectiveProperty, id: string}>();

  @Input() id:string

  
  private _property: InlayDirectiveProperty;
  get property() {
    return this._property
  }
  @Input() 
  set property(property: InlayDirectiveProperty) {
    this._property = property;
    this.generateInput(property);
  };


  constructor(
    private factoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
  }

  /**
   * プロパティの値の入力を受け付けるインプットを生成
   * 
   * @param {DirectivePropertyData} propertyData 
   * @memberof InlayDirectivePropertyComponent
   */
  generateInput(property: InlayDirectiveProperty) {
    let type:Type<InlayDirectivePropertyInput> = null
    switch (property.type) {
      case "text":
        type = InlayDirectivePropertyTextComponent
        break;
      case "script":
        type = InlayDirectivePropertyScriptComponent
        break;
      default:
        return
    }

    const componentFactory = this.factoryResolver.resolveComponentFactory(type)
    const componentRef = this.inputInsertMarker.createComponent(componentFactory);
    console.log(this.id)
    componentRef.instance.value = property.value
    componentRef.instance.id = this.id
    componentRef.instance.emitter = this.onPropertyChanged
    componentRef.instance.property = this.property

  }

}





