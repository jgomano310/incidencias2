import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private Coleccion ="usuarios";
  constructor(private firebase:AngularFirestore, 
  private auth: AngularFireAuth) { }

  getUusuario(id:string){
    return this.firebase.collection(this.Coleccion).doc(id).snapshotChanges();
    
  }


  getAll(){
    return this.firebase.collection(this.Coleccion).snapshotChanges();
  }


  

  updateUsuario(documentId:string,usuarios:Usuarios){

    return this.firebase.collection(this.Coleccion).doc(documentId).update(usuarios);

  }

  delete(id_usuario:string){

    return this.firebase.collection(this.Coleccion).doc(id_usuario).delete();
  }
  



  newUsuario(usuarios:Usuarios){

    return this.firebase.collection("usuarios").add(usuarios);

  }

  
}
