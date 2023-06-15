import { Component } from '@angular/core';
import { AuthenticationService }  from '../../services/authenticationservices/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { validexpression } from "../../models/validators.model";
import { ThisReceiver } from '@angular/compiler';
declare var $: any;
declare var Failednotification: any;
declare var Successfulnotification: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    Email: new FormControl('',[Validators.required,Validators.pattern(validexpression.Email)]),
    Password: new FormControl('',[Validators.required,Validators.pattern(validexpression.Password)]),
  });
  constructor(
    private authservice: AuthenticationService,
    private router: Router,
  ) {

  }
  Valid(event: any) {
    const target = event.target as HTMLInputElement;
    const _target = target.getAttribute("id");
    $("#" + _target).ValidInputs();
  }
  doLogin() {
    if (this.form.valid) {
      const _email = this.form.get("Email")?.value == "" || this.form.get("Email")?.value == undefined ? "" : this.form.get("Email")?.value;
      const _password = this.form.get("Password")?.value == "" || this.form.get("Password")?.value == undefined ? "" : this.form.get("Password")?.value;
      this.authservice.login(_email == undefined ? "" : _email, _password == undefined ? "" : _password)
        .subscribe(response => {
          console.log("entro subscribe")
          if (response.isOK) {
            console.log("entro isOK")
            this.router.navigate(['/home']);
          } else {
            console.log("no entro isOK")
            $(function () {
              $('.authentication').each(function (event: any) {
                if ($("#" + this.id).attr('type') == "text") {
                  $("#" + this.id).addClass('is-invalid');
                } else {
                  $('#' + this.id).addClass('is-invalidlabel');
                }
              });
            });
            Failednotification('Usuario o contraseña incorrecta');
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
