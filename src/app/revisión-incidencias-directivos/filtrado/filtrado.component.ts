import { Component, OnInit } from '@angular/core';
import { ServicioCrudService } from 'src/app/servicios/servicio-crud.service';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

  Lista: any[]=[];

  constructor(public servicio:ServicioCrudService) { }
  getAll() {
    this.servicio.getAll().subscribe(
      (resp: any) => {
        this.Lista = [];
        resp.forEach((incidenciasSnapshot: any) => {
          this.Lista.push(
            {
              ...incidenciasSnapshot.payload.doc.data(),
              documentId: incidenciasSnapshot.payload.doc.id,
            }
          )
        });
      })

}
norevisadas() {
  this.servicio.Estado("no-revisadas").subscribe(
    (resp: any) => {
      this.Lista = [];
      resp.forEach((incidenciasSnapshot: any) => {
        this.Lista.push(
          {
            ...incidenciasSnapshot.payload.doc.data(),
            documentId: incidenciasSnapshot.payload.doc.id,
          }
        )
      });
    })

}

revisadas() {
  this.servicio.Estado("revisadas").subscribe(
    (resp: any) => {
      this.Lista = [];
      resp.forEach((incidenciasSnapshot: any) => {
        this.Lista.push(
          {
            ...incidenciasSnapshot.payload.doc.data(),
            documentId: incidenciasSnapshot.payload.doc.id,
          }
        )
      });
    })

}

  ngOnInit(): void {
   this.getAll();
  
}
}
