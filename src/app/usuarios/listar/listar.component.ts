import { Component, OnInit } from '@angular/core';
import { ServicioCrudService } from 'src/app/servicios/servicio-crud.service';
import { Usuarios } from '../../interfaces/usuarios';
import { UsuarioServiceService } from '../../servicios/usuario-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuarios[]=[];
  constructor(private servicio:UsuarioServiceService) { }

  ngOnInit(): void {

  
  this.servicio.getAll().subscribe(
    (resp: any) => {
      this.usuarios = [];
      resp.forEach( (incidencias: any) => {
        this.usuarios.push({
          documentId: incidencias.payload.doc.id,
          ...incidencias.payload.doc.data()
        })
       
      });
    }
  )
  
  }
  delete(id_usuario: string) {
      
    this.servicio.delete(id_usuario).then(
      () =>{
        console.log("hola");
      }, (error)=>{
        console.error(error);
      }

    );
  }
}
