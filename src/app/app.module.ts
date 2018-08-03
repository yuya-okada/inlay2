import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DndModule } from "ng2-dnd";

import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentHierarchyComponent } from './component-hierarchy/component-hierarchy.component';
import { ScreenComponent } from './run/screen/screen.component';
import { ComponentPropertyComponent } from './component-property/component-property.component';
import { KeysPipe } from './keys.pipe';
import { ComponentsDataService } from './components-data.service';
import { RunModule } from './run/run.module';
import { ProjectManagerService } from './run/project-manager.service';
import { InlayDirectiveComponent } from './inlay-directive/inlay-directive.component';
import { InlayDirectivePropertyComponent } from './inlay-directive-property/inlay-directive-property.component';
import { InlayDirectivePropertyTextComponent } from './inlay-directive-property-text/inlay-directive-property-text.component';
import { ModeBarComponent } from './mode-bar/mode-bar.component';
import { DesignModeComponent } from './design-mode/design-mode.component';
import { BlockModeComponent } from './block-mode/block-mode.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ScriptsListComponent } from './scripts-list/scripts-list.component';
import { PromptDialogComponent } from './prompt-dialog/prompt-dialog.component';
import { InlayDirectivePropertyScriptComponent } from './inlay-directive-property-script/inlay-directive-property-script.component';
import { ComponentsDataResolver } from './components-data-resolver';

const appRoutes: Routes = [
  {
    path: 'editor',
    component: DashboardComponent,
    children: [// 
      {
        path: "design",
        component: DesignModeComponent,
        outlet: "editor",
        resolve: {componentsData: ComponentsDataResolver}
      },
      {
        path: "block",
        component: BlockModeComponent,
        outlet: "editor"
      }
    ]
  },
  { path: '',
    redirectTo: '/editor/design',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ComponentHierarchyComponent,
    ScreenComponent,
    ComponentPropertyComponent,
    KeysPipe,
    InlayDirectiveComponent,
    InlayDirectivePropertyComponent,
    InlayDirectivePropertyTextComponent,
    ModeBarComponent,
    DesignModeComponent,
    BlockModeComponent,
    WorkspaceComponent,
    ScriptsListComponent,
    PromptDialogComponent,
    InlayDirectivePropertyScriptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // RouterModule.forChild(appRoutes),
    DndModule.forRoot(), // ドラッグアンドドロップ
    RunModule
  ],
  providers: [ComponentsDataService, ProjectManagerService, ComponentsDataResolver],
  bootstrap: [
    AppComponent
  ],
  entryComponents:[
    InlayDirectiveComponent,
    InlayDirectivePropertyTextComponent,
    InlayDirectivePropertyScriptComponent,
    PromptDialogComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
