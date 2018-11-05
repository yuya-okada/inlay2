import { FlexLayoutModule } from '@angular/flex-layout';
import { DesignModeComponent } from '../design-mode/design-mode.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InlayDirectivePropertyScriptComponent } from '../inlay-directive-property-script/inlay-directive-property-script.component';
import { InlayRunnerModule, MaterialModule } from 'inlay-runner';
import { ComponentHierarchyComponent } from '../component-hierarchy/component-hierarchy.component';
import { ComponentPropertyComponent } from '../component-property/component-property.component';
import { KeysPipe } from '../keys.pipe';
import { InlayDirectiveComponent } from '../inlay-directive/inlay-directive.component';
import { InlayDirectivePropertyComponent } from '../inlay-directive-property/inlay-directive-property.component';
import { InlayDirectivePropertyTextComponent } from '../inlay-directive-property-text/inlay-directive-property-text.component';
import { ModeBarComponent } from '../mode-bar/mode-bar.component';
import { BlockModeComponent } from '../block-mode/block-mode.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { EditorComponent } from './editor.component';
import { ScriptsListComponent } from '../scripts-list/scripts-list.component';
import { PromptDialogComponent } from '../prompt-dialog/prompt-dialog.component';
import { ComponentsDataResolver } from '../components-data-resolver';
import { EditorResolver } from '../editor-resolver';
import { ProjectsResolver } from '../projects-resolver';
import { SessionService } from '../session.service';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

const editorRoutes = [
  {
    path: "",
    component: EditorComponent,
    children: [
      {
        path: "design",
        component: DesignModeComponent,
        resolve: { projectData: EditorResolver },

        // outlet: "editor",
        // resolve: { componentsData: ComponentsDataResolver }
      },
      {
        path: "block",
        component: BlockModeComponent,
        // outlet: "editor"
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule.forChild(
      editorRoutes
    ),
    InlayRunnerModule
  ],
  declarations: [
    InlayDirectivePropertyScriptComponent,
    ComponentHierarchyComponent,
    ComponentPropertyComponent,
    KeysPipe,
    InlayDirectiveComponent,
    InlayDirectivePropertyComponent,
    InlayDirectivePropertyTextComponent,
    ModeBarComponent,
    DesignModeComponent,
    BlockModeComponent,
    WorkspaceComponent,
    EditorComponent,
    ScriptsListComponent,
    PromptDialogComponent,
  ],
  providers: [
    ComponentsDataResolver,
    EditorResolver,
    ProjectsResolver,
    SessionService,
    CookieService
  ],
  entryComponents: [
    InlayDirectiveComponent,
    InlayDirectivePropertyTextComponent,
    InlayDirectivePropertyScriptComponent,
    PromptDialogComponent
  ],
  exports: [
    RouterModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class EditorModule {


}
