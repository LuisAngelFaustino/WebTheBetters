import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroments/environment';
import {ResponseLogin} from '../../models/login.model';


@Injectable({
  providedIn: 'root'
})
export class CreateuserService {
  apiUrl = environment.API_URL;
  apiUrl2= environment.API_URL2;

  constructor(
    private http: HttpClient
  ) { }
    _serviceAddUser(Email: string, Password :string, Nombre: string, ApellidoP: string,ApellidoM:string,Telefono :string){
    const Data = `Email=${Email}&Password=${Password}&Nombre=${Nombre}&ApellidoP=${ApellidoP}&ApellidoM=${ApellidoM}&Telefono=${Telefono}`;
    return this.http.post<ResponseLogin>(`${this.apiUrl}/oauth/clien_credential/autheticationcreateuser?${Data}`,{
    });
  }
}
