import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { FormsModule } from '@angular/forms';
import { validexpression } from "../../models/validators.model";
import { ImportscriptsService } from "../../services/utilities/importscripts.service";

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../../app.component.scss']})
export class RegisterComponent {
  iconvisiblePassword: boolean;
  iconvisiblePasswordConfirm: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private _ImportScript:ImportscriptsService
  ) {
    _ImportScript.ImportaArchivo(["Global"]);
    // _ImportScript.ImportaArchivo(["amaran/acciones"]);
    // _ImportScript.ImportaArchivo(["amaran/amaran"]);

    this.iconvisiblePassword = true;
    this.iconvisiblePasswordConfirm = true;
  }
  form = new FormGroup({
    EmailUsuario: new FormControl('',[Validators.required,Validators.maxLength(validexpression.MaxlenghtEmail),Validators.pattern(validexpression.Email)]),
    NombreUsuario: new FormControl('',[Validators.required,Validators.pattern(validexpression.Nombres)]),
    APUsuario: new FormControl('',[Validators.required,Validators.pattern(validexpression.Apellidos)]),
    AMUsuario: new FormControl('',[Validators.required,Validators.pattern(validexpression.Apellidos)]),
    TelefonoUsuario: new FormControl('',[Validators.required, Validators.maxLength(validexpression.Telefonolength), Validators.pattern(validexpression.Telefono)]),
    PasswordUsuario: new FormControl('',[Validators.required,Validators.pattern(validexpression.Password)]),
    PassUsConfirm: new FormControl('',[Validators.required,Validators.pattern(validexpression.Password)])
  });
  ngOnInit(): void {

  }
  Valid(event:any){
    const target = event.target as HTMLInputElement;
    const _target= target.getAttribute("id");
    $("#" + _target).ValidInputs();
  }
  Validkeypress(event:any){
    // const target = event.target as HTMLInputElement;
    // const _target= target.getAttribute("id");
    // $("#" + _target).ValidKeypress();
  }
  
  Save(event:any){
    console.log(this.form.valid);
    if(this.form.valid){
      console.log(this.form.value);
    }
  }
  EventPassword(){
    if(this.iconvisiblePassword){
      this.iconvisiblePassword = false;
      $("#PasswordUser").attr("type","text");
    }else{
      this.iconvisiblePassword = true;
      $("#PasswordUser").attr("type","password");
    }
  }
  EventPasswordConfirm(){
    if(this.iconvisiblePasswordConfirm){
      this.iconvisiblePasswordConfirm = false;
      $("#PasswordConfirmUser").attr("type","text");
    }else{
      this.iconvisiblePasswordConfirm = true;
      $("#PasswordConfirmUser").attr("type","password");
    }
  }

  get NombreUsuarioInvalidInput(){
    return this.form.get('NombreUsuario')?.touched && this.form.get('NombreUsuario')?.invalid;
  }
  get APUsuarioInvalidInput(){
    return this.form.get('APUsuario')?.touched && this.form.get('APUsuario')?.invalid;
  }
  get AMUsuarioInvalidInput(){
    return this.form.get('AMUsuario')?.touched && this.form.get('AMUsuario')?.invalid;
  }
  get TelefonoUsuarioInvalidInput(){
    return this.form.get('TelefonoUsuario')?.touched && this.form.get('TelefonoUsuario')?.invalid;
  }
  get EmailInvalidInput(){
    return this.form.get('EmailUsuario')?.touched && this.form.get('EmailUsuario')?.invalid;
  }
  get PasswordUsuarioInvalidInput(){
    return this.form.get('PasswordUsuario')?.touched && this.form.get('PasswordUsuario')?.invalid;
  }
  get PassUsConfirmInvalidInput(){
    return this.form.get('PassUsConfirm')?.touched && this.form.get('PassUsConfirm')?.invalid;
  }
}