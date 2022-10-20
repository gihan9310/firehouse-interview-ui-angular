import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardPageComponent} from "./components/dashboard-page/dashboard-page.component";
import {ViewBookmarkPageComponent} from "./components/view-bookmark-page/view-bookmark-page.component";

const routes: Routes = [
  {path:'',component:DashboardPageComponent},
  {path:'bookmarks',component:ViewBookmarkPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
