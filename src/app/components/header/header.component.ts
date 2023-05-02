import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../../app.component.scss']
})
export class HeaderComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ReloadRouting(event:any){
    const target = event.target as HTMLInputElement;
    const _target= target.getAttribute("attr-header");
    let _route = _target != "" && _target != null && _target != undefined ? true : false;
    if(_route){
      this.router.navigate([_target]);         
    }
  }

}
