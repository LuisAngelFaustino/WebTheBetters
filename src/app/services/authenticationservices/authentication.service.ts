import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../enviroments/environment';
import { tap } from 'rxjs';
import { TokenService } from '../../services/authenticationservices/token.service'
import {ResponseLogin} from '../../models/login.model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  apiUrl = environment.API_URL;
  apiUrl2= environment.API_URL2;
  constructor(
    private http: HttpClient,
    private tokenService : TokenService
  ) { }

  login(Email: string, Password: string) {
    return this.http.post<ResponseLogin>(`${this.apiUrl}/oauth/clien_credential/accesstoken?Email=${Email}&Password=${Password}`,
    {  Email,  Password })
    .pipe(
      tap(response => {
        if(response.isOK == true){
          this.tokenService.saveToken(response.authorization);
        }
      })
    );
  }
}
