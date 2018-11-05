import { EditorModule } from './editor/editor.module';
import { InlayRunnerModule } from 'inlay-runner';
export const API_ROOT = "http://localhost:3000"

import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { FlexLayoutModule } from "@angular/flex-layout";
import { DndModule } from "ng2-dnd";
import { CookieService } from 'ngx-cookie-service';

import { MaterialModule } from './material/material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsResolver } from './projects-resolver';
import { HttpClientModule } from '@angular/common/http';
import { EditorResolver } from './editor-resolver';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SessionService } from './session.service';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  {
    path: 'editor/:projectId',
    // canActivate: [SessionService],
    loadChildren: './editor/editor.module#EditorModule',
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    resolve: { projectsData: ProjectsResolver },
    canActivate: [SessionService]
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "signup",
    component: SignupComponent,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    DndModule.forRoot(), // ドラッグアンドドロップ
  ],
  providers: [
    ProjectsResolver,
    SessionService,
    CookieService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
