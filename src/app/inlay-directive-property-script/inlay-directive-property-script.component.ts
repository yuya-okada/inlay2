import { ScriptsManagerService } from 'inlay-runner';
import { Component, OnInit } from '@angular/core';
import { InlayDirectivePropertyInput } from '../inlay-directive-property-input';
import { InlayScript } from 'inlay-runner';


@Component({
  selector: 'app-inlay-directive-property-script',
  templateUrl: './inlay-directive-property-script.component.html',
  styleUrls: ['./inlay-directive-property-script.component.css']
})
export class InlayDirectivePropertyScriptComponent extends InlayDirectivePropertyInput implements OnInit {
  scripts: { key?: InlayScript } = {}
  scriptKeys: string[] = []

  constructor(scriptsManagerService: ScriptsManagerService) {
    super();
    this.scripts = scriptsManagerService.scripts;
    this.scriptKeys = Object.keys(this.scripts)
  }

  ngOnInit() {
  }


}
