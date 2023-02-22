import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { RevisiónIncidenciasDirectivosModule } from '../revisión-incidencias-directivos/revisión-incidencias-directivos.module';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [

  {
   path:'', component:ListarComponent,
    
  },
  {
    path:'crear',component:CrearComponent, 

  },

  {
    path:'listar',component:ListarComponent,  

  },
  {
    path: 'actualizar/:id', loadChildren: () => import('../gestión-de-incidencias/gestión-de-incidencias.module').
    then(i=>i.GestiónDeIncidenciasModule)
  },

  


];

@NgModule({

  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class IncidenciasRoutingModule { }
