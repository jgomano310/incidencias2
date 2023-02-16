import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './introducción-de-incidencias/crear/crear.component';
import { Incidencias } from './interfaces/Incidencias';

const routes: Routes = [

  {
    path: 'introducción-de-incidencias', loadChildren: () => import('./introducción-de-incidencias/introducción-de-incidencias.module').
    then(i=>i.IntroducciónDeIncidenciasModule)
    
    
  },

  {
    path: 'revisión-incidencias-directivos', loadChildren: () => import('./revisión-incidencias-directivos/revisión-incidencias-directivos.module').
    then(i=>i.RevisiónIncidenciasDirectivosModule)
    
    
  },

  {
    path: '**', redirectTo:'introducción-de-incidencias/listar' , pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
