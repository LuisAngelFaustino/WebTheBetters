import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { validexpression } from "../../models/validators.model";
import { ThisReceiver } from '@angular/compiler';
declare var $: any;
declare var Failednotification: any;
declare var Successfulnotification: any;



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss']
})

export class HomeComponent {
  constructor(
    private router: Router,
  ) {
   }

  ReloadRouting(event:any){
    const target = event.target as HTMLInputElement;
    const _target= target.getAttribute("attr-header");
    let _route = _target != "" && _target != null && _target != undefined ? true : false;
    if(_route){
      this.router.navigate([_target]);         
    }
  }
}

