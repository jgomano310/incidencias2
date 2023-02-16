import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { GestiónDeIncidenciasRoutingModule } from './gestión-de-incidencias-routing.module';



@NgModule({
  declarations: [
    ActualizarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GestiónDeIncidenciasRoutingModule
   
  ]
})
export class GestiónDeIncidenciasModule { }
