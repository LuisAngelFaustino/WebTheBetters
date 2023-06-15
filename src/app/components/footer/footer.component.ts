import { Component } from '@angular/core';
declare var AOS: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['../../app.component.scss']
})
export class FooterComponent {

  ngOnInit(): void { 
    AOS.init({
      duration: 2000,
    })
  }
}
