import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import {TokenService} from '../services/authenticationservices/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private tokenService: TokenService,
    private router :Router
  ){}

  canActivate(): boolean{
    const token = this.tokenService.getToken();
    if(!token){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
  
}
