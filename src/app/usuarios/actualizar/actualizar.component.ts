import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService } from '../../servicios/usuario-service.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {

  public editForm: FormGroup
  posRef: any
  constructor(public servicio: UsuarioServiceService,
    public formBuilder: FormBuilder,
    private activeRoute: ActivatedRoute,
    private Router: Router) { 

      this.editForm = this.formBuilder.group({
  
        
        nombre:[''],
        apellidos:[''],
        contrasena:[''],
        correo:[''],
        rol:[''],
        
      })
    }

  ngOnInit(): void {

    const id = this.activeRoute.snapshot.paramMap.get('id')!
      this.servicio.getUusuario(id).subscribe(res => {
      this.posRef = res;
      this.editForm = this.formBuilder.group({
        
        nombre:[this.posRef.nombre],
        apellidos:[this.posRef.apellidos],
        contrasena:[this.posRef.contrasena],
        correo:[this.posRef.correo],
        rol:[this.posRef.rol],
       
      })
    })
  }

  onSubmit() {
    const id = this.activeRoute.snapshot.paramMap.get('id')!
    this.servicio.updateUsuario(id,this.editForm.value)
    this.Router.navigate([''])
  }
  }
