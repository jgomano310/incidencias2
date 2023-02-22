import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './introducción-de-incidencias/crear/crear.component';
import { Incidencias } from './interfaces/Incidencias';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { GuardGuard } from './guard.guard';
import { CreateComponent } from './usuarios/create/create.component';
import { ListarComponent } from './usuarios/listar/listar.component';
import { ActualizarComponent } from './usuarios/actualizar/actualizar.component';


const routes: Routes = [

  {
    path: 'introducción-de-incidencias', loadChildren: () => import('./introducción-de-incidencias/introducción-de-incidencias.module').
    then(i=>i.IntroducciónDeIncidenciasModule),
    
    
  },

  {
    path: 'revisión-incidencias-directivos', loadChildren: () => import('./revisión-incidencias-directivos/revisión-incidencias-directivos.module').
    then(i=>i.RevisiónIncidenciasDirectivosModule),canActivate:[GuardGuard]
    
    
  },
  {
    path:'listar', component: ListarComponent, canActivate:[GuardGuard]
  },


  {
    path:'create', component: CreateComponent
  },
  {
    path:'actualizar/:id', component:ActualizarComponent
  },

  
  
  {
    path:'registro', component: RegistroComponent
  },
  

  
  {
    path:'registro', component: RegistroComponent
  },
  {
    path:'login',component: LoginComponent
  },
  {
    path: '**', redirectTo:'login' , pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
