import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebappTheBetters';
  constructor(  
  ) {
    //disable developer tools
    if (window.location.hostname === 'localhost') {
      //disable context menu (right click)
      document.oncontextmenu = function () {
        return false;
      };

      document.onkeydown = function (event) {
        const Ban = false
        //disable developr tools F12
        if (event.keyCode == 123) {
          return Ban;
        } else if (
          //disable developr tools CTRL+SHIFT+I
          (event.ctrlKey && event.shiftKey && event.keyCode == 73) ||
          //disable developr tools CTRL+SHIFT+J
          (event.ctrlKey && event.shiftKey && event.keyCode == 74) 
          // || 
          // //disable developr tools CTRL+SHIFT+C

          // (event.ctrlKey && event.shiftKey && event.keyCode == 67) 


        ) {
          return Ban;
        }
        return true;
        
      };

    }
  }
}
