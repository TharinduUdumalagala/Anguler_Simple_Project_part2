import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "../services/login.service";

@Injectable({
  providedIn: 'root'
})
export class OrderGuard implements CanActivate {

  constructor(private _router: Router , private  _loginService:LoginService) {
  }

  canActivate():boolean {
    if (this._loginService.isLogin()){
      return true;
    }else {
      this._router.navigateByUrl('/login').then(respose=>{
        console.log(respose);
      },error=>{
        console.log(error)
      });

      return false;
    }

  }

}
