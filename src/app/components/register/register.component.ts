import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { validexpression } from "../../models/validators.model";
import { CreateuserService } from '../../services/authenticationservices/createuser.service';
import { BehaviorSubject } from 'rxjs';
declare var $: any;
declare var Failednotification: any;
declare var Successfulnotification: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.scss']
})

export class RegisterComponent {
  iconvisiblePassword: boolean;
  iconvisiblePasswordConfirm: boolean;
  FlagUser: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private createuserservice: CreateuserService
  ) {
    this.iconvisiblePassword = true;
    this.iconvisiblePasswordConfirm = true;
    this.FlagUser = false;
  }
  form = new FormGroup({
    EmailUsuario: new FormControl('', [Validators.required, Validators.maxLength(validexpression.MaxlenghtEmail), Validators.pattern(validexpression.Email)]),
    NombreUsuario: new FormControl('', [Validators.required, Validators.pattern(validexpression.Nombres)]),
    APUsuario: new FormControl('', [Validators.required, Validators.pattern(validexpression.Apellidos)]),
    AMUsuario: new FormControl('', [Validators.required, Validators.pattern(validexpression.Apellidos)]),
    TelefonoUsuario: new FormControl('', [Validators.required, Validators.maxLength(validexpression.Telefonolength)
      , Validators.minLength(validexpression.Telefonolength), Validators.pattern(validexpression.Telefono)]),
    PasswordUsuario: new FormControl('', [Validators.required, Validators.pattern(validexpression.Password)]),
    PassUsConfirm: new FormControl('', [Validators.required, Validators.pattern(validexpression.Password)])
  });
  ngOnInit(): void {
    const valores = window.location.search;
    const urlParams = new URLSearchParams(valores);
    var _flagUser = urlParams.get('User');
    if(_flagUser && _flagUser == 'true'){
      this.FlagUser=true
    }
  }
  Valid(event: any) {
    const target = event.target as HTMLInputElement;
    const _target = target.getAttribute("id");
    $("#" + _target).ValidInputs();
  }
  Validkeypress(event: any) {
    const target = event.target as HTMLInputElement;
    const _target = target.getAttribute("id");
  }

  Save(event: any) {
    console.log(this.form.valid);
    if (this.form.valid) {
      if (this.form.get("PasswordUsuario")?.value != this.form.get("PassUsConfirm")?.value) {
        Failednotification('Las contraseñas deben coincidir');
        $("#PasswordConfirmUser").addClass('is-invalid');
        $("#PasswordConfirmUserlabel").addClass('is-invalidlabel');
      } else {
        const object = JSON.stringify(this.form.value)
        const form = JSON.parse(object);
        // AddUsers(form.EmailUsuario,form.PasswordUsuario, form.NombreUsuario,form.APUsuario,form.AMUsuario,form.TelefonoUsuario);
        this.createuserservice._serviceAddUser(form.EmailUsuario,form.PasswordUsuario, form.NombreUsuario,form.APUsuario,form.AMUsuario,form.TelefonoUsuario)
        .subscribe(response => {
          if (response.isOK && response.authorization == "Authorized") {
            Successfulnotification('Usuario creado correctamente');
            history.pushState({ data: true }, '',`${window.location.href}?User=true`);
            this.FlagUser=true
          } else {
            Failednotification('Ocurrió algún error');
          }
        });
      }
    }
  }
  AddUsers(Email: string,PasswordUsuario: string,NombreUsuario: string, APUsuario: string, AMUsuario: string,TelefonoUsuario: string){

  }
  EventPassword() {
    if (this.iconvisiblePassword) {
      this.iconvisiblePassword = false;
      $("#PasswordUsuario").attr("type", "text");
    } else {
      this.iconvisiblePassword = true;
      $("#PasswordUsuario").attr("type", "password");
    }
  }
  EventPasswordConfirm() {
    if (this.iconvisiblePasswordConfirm) {
      this.iconvisiblePasswordConfirm = false;
      $("#PasswordConfirmUser").attr("type", "text");
    } else {
      this.iconvisiblePasswordConfirm = true;
      $("#PasswordConfirmUser").attr("type", "password");
    }
  }

  get NombreUsuarioInvalidInput() {
    return this.form.get('NombreUsuario')?.touched && this.form.get('NombreUsuario')?.invalid;
  }
  get APUsuarioInvalidInput() {
    return this.form.get('APUsuario')?.touched && this.form.get('APUsuario')?.invalid;
  }
  get AMUsuarioInvalidInput() {
    return this.form.get('AMUsuario')?.touched && this.form.get('AMUsuario')?.invalid;
  }
  get TelefonoUsuarioInvalidInput() {
    return this.form.get('TelefonoUsuario')?.touched && this.form.get('TelefonoUsuario')?.invalid;
  }
  get EmailInvalidInput() {
    return this.form.get('EmailUsuario')?.touched && this.form.get('EmailUsuario')?.invalid;
  }
  get PasswordUsuarioInvalidInput() {
    return this.form.get('PasswordUsuario')?.touched && this.form.get('PasswordUsuario')?.invalid;
  }
  get PassUsConfirmInvalidInput() {
    return this.form.get('PassUsConfirm')?.touched && this.form.get('PassUsConfirm')?.invalid;
  }
}