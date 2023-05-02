import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { BuysComponent } from './components/buys/buys.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import {RegisterComponent} from './components/register/register.component';

import {AuthGuard} from './guards/auth.guard';
import {RedirectGuard} from './guards/redirect.guard';

const routes: Routes = [
  { path: '', redirectTo:'/login',pathMatch:'full'},
  { path: 'login', canActivate:[RedirectGuard], component: LoginComponent},
  { path: 'home',canActivate: [AuthGuard], component: HomeComponent},
  { path: 'products',canActivate: [AuthGuard], component: ProductosComponent },
  { path: 'buys',canActivate: [AuthGuard], component: BuysComponent},
  { path: 'reports',canActivate: [AuthGuard], component: ReportsComponent},
  { path: 'settings',canActivate: [AuthGuard], component: SettingsComponent},
  { path: 'registerusuario',canActivate: [AuthGuard], component: RegisterComponent},
  { path: '**', redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
