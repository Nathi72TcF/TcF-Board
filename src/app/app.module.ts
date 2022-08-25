import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { WorkspaceComponent } from './components/inside/workspace/workspace.component';
import { BoardComponent } from './components/inside/board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgxSpinnerModule } from 'ngx-spinner'
import { FormsModule } from '@angular/forms'
import { GravatarModule } from 'ngx-gravatar'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WorkspaceComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    GravatarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
