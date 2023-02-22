import { Component, OnInit } from '@angular/core';
import { Incidencias } from 'src/app/interfaces/Incidencias';
import { ServicioCrudService } from '../../servicios/servicio-crud.service';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  incidencias:Incidencias[]=[];
  constructor(private servicio:ServicioCrudService) { }

  ngOnInit(): void {

  
  this.servicio.getAll().subscribe(
    (resp: any) => {
      this.incidencias = [];
      resp.forEach( (incidencias: any) => {
        this.incidencias.push({
          documentId: incidencias.payload.doc.id,
          ...incidencias.payload.doc.data()
        })
       
      });
    }
  )
  

  
  

}
delete(documentId: string) {
      
  this.servicio.delete(documentId).then(
    () =>{
      console.log("hola");
    }, (error)=>{
      console.error(error);
    }

  );
}
}
