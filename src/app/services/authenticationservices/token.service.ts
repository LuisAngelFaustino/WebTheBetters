import { Injectable } from '@angular/core';
import { getCookie, setCookie, removeCookie } from 'typescript-cookie';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  saveToken(token: string){
    // localStorage.setItem('Session',token);
    //setCookie('Session-TheBetter',token,{expires: 0.5, path: '/'});//12 horas
    //setCookie('Session-TheBetter',token,{expires: 0.0009765625, path: '/'});//Para 5 minutos
    setCookie('Session-TheBetter',token,{expires: 0.015625, path: '/'});//Para 30 minutos

  }
  getToken(){
    const token = getCookie('Session-TheBetter');
    // const token = localStorage.getItem('Session');
    return token;
  }
  removeToken(){
    // localStorage.removeItem('Session');
    removeCookie('Session-TheBetter');
  }
}
