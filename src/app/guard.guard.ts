import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicioCrudService } from './servicios/servicio-crud.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private auth: AngularFireAuth, private servicio: ServicioCrudService, private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.servicio.autentificado().subscribe(
        resp=>{
          if(resp && resp.uid){
            this.servicio.cogerUsuario(resp.email).subscribe(
              (resp:any[])=>{
                resp.forEach(datauuser=>{
                  if(datauuser.rol="1")
                  return true;
                  else if(datauuser.rol="0")
                  return false;
                  else return false;
                  

                })
              }
            )
            return true;
          }
          
          else{
            this.router.navigate(['/login']);
            window.alert("debe estar registrado");
            return false;

            
          }
        }
      )
    return true;
  }
  
}
