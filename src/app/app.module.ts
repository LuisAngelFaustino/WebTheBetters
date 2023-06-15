import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportscriptsService } from './services/utilities/importscripts.service';
import { AuthenticationService } from './services/authenticationservices/authentication.service';
import { CreateuserService } from './services/authenticationservices/createuser.service';
import { TokenService } from './services/authenticationservices/token.service'; 

import { BuysComponent } from './components/buys/buys.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportsComponent } from './components/reports/reports.component';
import { SettingsComponent } from './components/settings/settings.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BuysComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProductosComponent,
    RegisterComponent,
    ReportsComponent,
    SettingsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ImportscriptsService,
    TokenService,
    CreateuserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
