import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { Router } from 'express';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailyComponent } from './components/daily/daily.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistroDailyComponent } from './components/registro-daily/registro-daily.component';
import { ListaAmigosComponent } from './components/lista-amigos/lista-amigos.component';
import { RegistroAmigosComponent } from './components/registro-amigos/registro-amigos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    Pagina404Component,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    DailyComponent,
    NavbarComponent,
    RegistroDailyComponent,
    ListaAmigosComponent,
    RegistroAmigosComponent,
    NotificacionesComponent,
    PerfilComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
