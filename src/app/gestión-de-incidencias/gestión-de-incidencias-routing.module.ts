import { NgModule } from "@angular/core";
import { canActivate, redirectUnauthorizedTo } from "@angular/fire/auth-guard";
import { RouterModule, Routes } from "@angular/router";
import { GuardGuard } from "../guard.guard";
import { ActualizarComponent } from "./actualizar/actualizar.component";

const routes: Routes = [

   {
    path: 'actualizar', component: ActualizarComponent, canActivate:[GuardGuard]
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
  