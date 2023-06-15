import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['../../app.component.scss']
})
export class MenuComponent {

  iconvisiblemenu: boolean;

  constructor( 
    private router: Router
    ) {
      this.iconvisiblemenu = false;
    }
    ngOnInit(): void { 

    }
  ShowMenu(){
    if(this.iconvisiblemenu){
      this.iconvisiblemenu = false
    }else{
      this.iconvisiblemenu = true
    }
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
