import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FiltradoComponent } from './filtrado/filtrado.component';
import { RevisiónIncidenciasDirectivosRoutingModule } from './revision-incidencias-directivos.routing.module';



@NgModule({
  declarations: [

    FiltradoComponent
  ],
  imports: [
    CommonModule, 
    RevisiónIncidenciasDirectivosRoutingModule
  ]
})
export class RevisiónIncidenciasDirectivosModule { }
