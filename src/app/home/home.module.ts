import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import { ViewBookmarkPageComponent } from './components/view-bookmark-page/view-bookmark-page.component';
import {BookmarksService} from "./services/bookmarks.service";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    DashboardPageComponent,
    ViewBookmarkPageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    BookmarksService
  ]
})
export class HomeModule { }
