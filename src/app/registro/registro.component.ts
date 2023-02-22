import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCrudService } from '../servicios/servicio-crud.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  public postForm:FormGroup;
  constructor(private afAuth: AngularFireAuth, private router: Router, private fb: FormBuilder, private servicio:ServicioCrudService
    ) { 

      { 
        this.postForm=this.fb.group({
  
      nombre:[''],
      apellidos:[''],
      email:[''],
      password: [''],
      rol: [1],
      
    })
  }

  }
  

  ngOnInit(): void {
  }


  Registro(email:string, password:string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert('Correctamente registrado, ahora debe iniciar sesión');
        this.servicio.newUsuario(this.postForm.value);
        this.router.navigate(["/login"])
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

}
