import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DailyComponent } from './components/daily/daily.component';
import { RegistroDailyComponent } from './components/registro-daily/registro-daily.component';
import { ListaAmigosComponent } from './components/lista-amigos/lista-amigos.component';
import { RegistroAmigosComponent } from './components/registro-amigos/registro-amigos.component';
import { NotificacionesComponent } from './components/notificaciones/notificaciones.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ingreso', component: LoginComponent},
    {path: 'registro', component: RegistroComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'daily', component: DailyComponent},
    {path: 'amigos', component: ListaAmigosComponent},
    {path: 'crear-amigo', component: RegistroAmigosComponent},
    {path: 'editar-amigo/:id', component: RegistroAmigosComponent},
    {path: 'notificaciones', component: NotificacionesComponent},
    {path: 'perfil', component: PerfilComponent},
    {path: 'añadir-Daily', component: RegistroDailyComponent},
    {path: 'editar-Daily/:id', component: RegistroDailyComponent},
    {path: '404', component: Pagina404Component},
    {path: '**', redirectTo: '404', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
