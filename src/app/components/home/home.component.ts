import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss']
})

export class HomeComponent {
  constructor(
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

