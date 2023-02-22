import { NgModule, createComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '../environments/environment';

import { IntroducciónDeIncidenciasModule } from './introducción-de-incidencias/introducción-de-incidencias.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MenuComponent } from './menu/menu.component';
import { RevisiónIncidenciasDirectivosModule } from './revisión-incidencias-directivos/revisión-incidencias-directivos.module';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CreateComponent } from './usuarios/create/create.component';
import { ListarComponent } from './usuarios/listar/listar.component';
import { ActualizarComponent } from './usuarios/actualizar/actualizar.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegistroComponent,
    CreateComponent,
    ListarComponent,
    ActualizarComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    
    
    IntroducciónDeIncidenciasModule,
    RevisiónIncidenciasDirectivosModule,
    provideAuth(() => getAuth())
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
