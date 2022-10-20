import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthLayoutComponent } from './theme/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './theme/main-layout/main-layout.component';
import {AuthGardService} from "./services/auth-gard.service";

@NgModule({
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
