import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ActualizarComponent } from "./actualizar/actualizar.component";

const routes: Routes = [

   {
    path: 'actualizar', component: ActualizarComponent
   },

  {
    path: "**", redirectTo: "actualizar", pathMatch: "full" 
  }
  
  ];
  
  @NgModule({
  
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
  export class GestiónDeIncidenciasRoutingModule { }
  