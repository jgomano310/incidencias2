import { Injectable } from '@angular/core';


import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Incidencias } from '../interfaces/Incidencias';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class ServicioCrudService {
  authF = getAuth();
  

  private Coleccion ="incidencias";
  constructor(private firebase:AngularFirestore, 
  private auth: AngularFireAuth) { }



  getIncidencia(id:string){
    return this.firebase.collection(this.Coleccion).doc(id).snapshotChanges();
    
  }


  getAll(){
    return this.firebase.collection(this.Coleccion).snapshotChanges();
  }


  newIncidencia(incidencias:Incidencias){

    return this.firebase.collection(this.Coleccion).add(incidencias);

  }

  updateIncidencia(documentId:string,incidencias:Incidencias){

    return this.firebase.collection(this.Coleccion).doc(documentId).update(incidencias);

  }

  delete(id_incidencia:string){

    return this.firebase.collection(this.Coleccion).doc(id_incidencia).delete();
  }
  

   Estado(estado: string){
    
  return this.firebase.collection('incidencias', ref => ref.where("estado", "==", estado)).snapshotChanges()
  }

 
 

  newUsuario(incidencias:Incidencias){

    return this.firebase.collection("usuarios").add(incidencias);

  }

  cerrarSesion(){
    this.auth.signOut();
  }
  cogerUsuario(email: any) {
    console.log(this.firebase.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges());
    return this.firebase.collection('usuarios', ref => ref.where("email", "==", email)).snapshotChanges()
  }

  autentificado(){
    return this.auth.authState;
  }

 




 




    }

