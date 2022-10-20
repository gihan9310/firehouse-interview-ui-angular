import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from "./theme/main-layout/main-layout.component";
import {AuthLayoutComponent} from "./theme/auth-layout/auth-layout.component";
import {AuthGardService} from "./services/auth-gard.service";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {
        path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ],
    canActivate:[AuthGardService]
  },
  {
    path: 'login', component: AuthLayoutComponent, children: [
      {
        path: '', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
