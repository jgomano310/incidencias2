import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FiltradoComponent } from './filtrado/filtrado.component';
import { Revisi├│nIncidenciasDirectivosRoutingModule } from './revision-incidencias-directivos.routing.module';



@NgModule({
  declarations: [

    FiltradoComponent
  ],
  imports: [
    CommonModule, 
    Revisi├│nIncidenciasDirectivosRoutingModule
  ]
})
export class Revisi├│nIncidenciasDirectivosModule { }
