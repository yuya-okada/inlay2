import { Component, OnInit } from '@angular/core';
import { InlayDirectivePropertyInput } from '../inlay-directive-property-input';
import { ProjectManagerService } from '../run/project-manager.service';
import { InlayScript } from '../run/inlay-script';

@Component({
  selector: 'app-inlay-directive-property-script',
  templateUrl: './inlay-directive-property-script.component.html',
  styleUrls: ['./inlay-directive-property-script.component.css']
})
export class InlayDirectivePropertyScriptComponent extends InlayDirectivePropertyInput implements OnInit {
  scripts: {key?: InlayScript}  = {}
  scriptKeys: string[] = []

  constructor(private projectManagerService: ProjectManagerService) { 
    super();
    this.scripts = projectManagerService.scripts;
    this.scriptKeys = Object.keys(this.scripts)
  }

  ngOnInit() {
  }


}
