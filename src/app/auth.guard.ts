import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {map,take} from 'rxjs/operators';
import { FormService } from './form.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private formservice:FormService,
    private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.formservice.isLoggedIn 
    .pipe( take(1), map((isLoggedIn:boolean)=>{
      if(!isLoggedIn){
        this.router.navigate(['/loginform']);
        return false;
      }
      return true;
    }))
  }
  
}
