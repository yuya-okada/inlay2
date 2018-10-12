import { Component, OnInit, ViewChild, ViewContainerRef, Output } from '@angular/core';
import { InlayScript } from '../run/inlay-script';
import { ProjectManagerService } from '../run/project-manager.service';
declare var Blockly: any;

@Component({
  selector: 'inblockly-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  @ViewChild("blocklyArea", { read: ViewContainerRef }) private blocklyAreaRef: ViewContainerRef;
  @ViewChild("blocklyDiv", { read: ViewContainerRef }) private blocklyDivRef: ViewContainerRef;
  /**
   * ワークスペースのオブジェクト
   *
   * @type {*}
   * @memberof WorkspaceComponent
   */
  workspace: any;
  /**
   * 生成されたコード。編集されるたびにリアルタイムに変化する
   *
   * @type {string}
   * @memberof WorkspaceComponent
   */
  generatedCode:string = "// generated code will appear here";
  /**
   * ワークスペースの内容の情報をXMLとして保持。編集されるたびにリアルタイムに変化する
   *
   * @type {string}
   * @memberof WorkspaceComponent
   */
  generatedXml:string = ""
  /**
   * 現在選択されているスクリプトの名前
   *
   * @type {string}
   * @memberof WorkspaceComponent
   */
  currentScriptName:string = null
  /**
   * ワークスペースのサイズ更新を担うIntervalのID
   *
   * @private
   * @memberof WorkspaceComponent
   */
  private intervalId = null

  constructor(private projectManagerService: ProjectManagerService) { }

  ngOnInit() {

    const toolbox: any = {toolbox: document.getElementById('toolbox')};
    const blocklyDiv = this.blocklyDivRef.element.nativeElement;
    this.workspace = Blockly.inject(blocklyDiv, toolbox);
    this.workspace.addChangeListener(e => this.onWorkspaceChange(e));

    Blockly.mainWorkspace.clear()
    let xml = Blockly.Xml.textToDom("");
    Blockly.Xml.domToWorkspace(xml, this.workspace);

    window.addEventListener('resize', () => this.onResize(), false);
    this.onResize();
    this.intervalId = setInterval(()=>this.onResize(), 1000)
    Blockly.svgResize(this.workspace);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
    $(".blocklyWidgetDiv").remove()

  }

  /**
   * ワークスペースの内藤が変化するたびに呼ばれる
   *
   * @param {*} item
   * @memberof WorkspaceComponent
   */
  onWorkspaceChange(item) : void {
    let code: string = Blockly.JavaScript.workspaceToCode(this.workspace);
    this.generatedCode = code;
    this.generatedXml =  Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace))

    const script = this.projectManagerService.scripts[this.currentScriptName]
    script.xml = this.generatedXml
    script.code = this.generatedCode
  }
  /**
   * スクリプトを読み込み、表示されているスクリプトを変化する
   *
   * @param {string} name
   * @memberof WorkspaceComponent
   */
  loadScript(name: string) {
    if (this.currentScriptName) {
      const currentScript = this.projectManagerService.scripts[this.currentScriptName]
      currentScript.xml = this.generatedXml
      currentScript.code = this.generatedCode
    }

    const script = this.projectManagerService.scripts[name]
    Blockly.mainWorkspace.clear()
    let xml = Blockly.Xml.textToDom(script.xml);
    Blockly.Xml.domToWorkspace(xml, this.workspace);

    this.currentScriptName = name

  }

  /**
   * ワークスペースのサイズをリサイズする
   *
   * @memberof WorkspaceComponent
   */
  onResize() {
    const blocklyArea = this.blocklyAreaRef.element.nativeElement;
    const blocklyDiv = this.blocklyDivRef.element.nativeElement;
 
    const left = $(blocklyArea).offset().left
    const top = $(blocklyArea).offset().top
    // Position blocklyDiv over blocklyArea.
    $(blocklyDiv).offset({
      left: left,
      top: top
    });
    $(blocklyDiv).width($(blocklyArea).width());
    $(blocklyDiv).height($(blocklyArea).height());
    Blockly.svgResize(this.workspace);
    
  }
}
