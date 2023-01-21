import { Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HomeComponent} from './pages/home/home.component';
import {AuthGuardGuard} from './auth-guard.guard';

export const appRoutes: Route[] = [
  {
    path: 'login',
    component: DashboardComponent
  },
  // {
  //   path: 'signUp',
  //   component: RegisterComponent
  // },
  {
    path: 'home',
    canActivate: [AuthGuardGuard],
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'login',
    // pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
