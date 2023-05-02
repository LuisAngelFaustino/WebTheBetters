import { Component } from '@angular/core';
import { AuthenticationService }  from '../../services/authenticationservices/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { validexpression } from "../../models/validators.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // form = this.formBuilder.nonNullable.group({
  //   email: ['', [Validators.email, Validators.required]],
  //   password: ['', [ Validators.required, Validators.minLength(6)]],
  // });
  form = new FormGroup({
    Email: new FormControl('',[Validators.required,Validators.pattern(validexpression.Email)]),
    Password: new FormControl('',[Validators.required,Validators.pattern(validexpression.Password)]),
  });
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthenticationService,
    private router: Router,
  ) {

   }

  doLogin() {
    if(this.form.valid){
    
      const _email  = this.form.get("Email")?.value == "" || this.form.get("Email")?.value == undefined ? "" : this.form.get("Email")?.value;
      const _password  = this.form.get("Password")?.value == "" || this.form.get("Password")?.value == undefined ? "" : this.form.get("Password")?.value;

      //Ejecución del servicio Auth
      this.authservice.login(_email == undefined ? "" :_email,_password == undefined ? "" :_password)
      .subscribe(response => {
        if(response.isOK){
          this.router.navigate(['/home']);         
        }else{
          alert("Error in the user or password");
        }
      })
    }
  }
  // $event
  get EmailInput(){
    return this.form.get('Email')?.touched && this.form.get('Email')?.invalid;
  }
  get PasswordInput(){
    return this.form.get('Password')?.touched && this.form.get('Password')?.invalid;
  }
}
