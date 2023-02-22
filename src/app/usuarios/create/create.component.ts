import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCrudService } from 'src/app/servicios/servicio-crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public postForm:FormGroup;

  constructor(public servicio:ServicioCrudService,
    public formbuilder:FormBuilder,
    public router:Router) 
    { 
      this.postForm=this.formbuilder.group({

        nombre:[''],
        apellidos:[''],
        contrasena:[''],
        correo:[''],
        rol:[0],

    
  })
}
ngOnInit(): void {
  
}

OnSubmit(){
  this.servicio.newUsuario(this.postForm.value)
  this.router.navigate([''])
}

}
