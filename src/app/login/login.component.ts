import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicioCrudService } from '../servicios/servicio-crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServicioCrudService,
     private fb: FormBuilder, 
     private afAuth: AngularFireAuth, 
     private router: Router) { }

  ngOnInit(): void {
  }

  Login(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        if (result) {
          window.alert("correctamente logueado, disfrute.");

        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  cerrarSesion() {
    try {
      this.service.cerrarSesion();
      this.router.navigate(['login']);
      alert("Has cerrado sesión");
    } catch (error) {
      console.log(error);
    }
  }



}
