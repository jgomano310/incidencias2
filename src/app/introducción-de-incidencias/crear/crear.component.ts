import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';
import { ServicioCrudService } from 'src/app/servicios/servicio-crud.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  public postForm:FormGroup;

  constructor(public servicio:ServicioCrudService,
    public formbuilder:FormBuilder,
    public router:Router) 
    { 
      this.postForm=this.formbuilder.group({

    id_incidencia:[''],
    autor:[''],
    fecha:[''],
    lugar_incidencia:[''],
    descripcion: [''],
    arreglo: [''],
    estado: ['revisado']
  })
}
ngOnInit(): void {
  
}

OnSubmit(){
  this.servicio.newIncidencia(this.postForm.value)
  this.router.navigate([''])
}

}
