import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { IntroducciónDeIncidenciasModule } from './introducción-de-incidencias/introducción-de-incidencias.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MenuComponent } from './menu/menu.component';
import { RevisiónIncidenciasDirectivosModule } from './revisión-incidencias-directivos/revisión-incidencias-directivos.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    
    IntroducciónDeIncidenciasModule,
    RevisiónIncidenciasDirectivosModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
