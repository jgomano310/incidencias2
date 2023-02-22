import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [

    {
     path:'', component:FiltradoComponent, 
      
    },
    {
      path: "**", redirectTo: "filtrado", pathMatch: "full" 
    }
    
    
  
  
  ];
  
  @NgModule({
  
    imports: [
      RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
  })
  export class RevisiónIncidenciasDirectivosRoutingModule { }
  