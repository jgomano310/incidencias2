import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearComponent } from './crear/crear.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { ListarComponent } from './listar/listar.component';



@NgModule({
  declarations: [
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IncidenciasRoutingModule
  ],
  exports:[
    ListarComponent,
    CrearComponent
  ]

})
export class IntroducciónDeIncidenciasModule { }
