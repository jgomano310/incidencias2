import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { ServicioCrudService } from 'src/app/servicios/servicio-crud.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  public editForm: FormGroup
  posRef: any
  constructor(public servicio: ServicioCrudService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private Router: Router) { 

      this.editForm = this.formBuilder.group({
        estado: [''],
        
      })
    }

  ngOnInit(): void {

    const id = this.activeRoute.snapshot.paramMap.get('id')!
      this.servicio.getIncidencia(id).subscribe(res => {
      this.posRef = res;
      this.editForm = this.formBuilder.group({
        estado: [this.posRef.estado]
       
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')!
    this.servicio.updateIncidencia(id,this.editForm.value)
    this.Router.navigate([''])
  }
  }


