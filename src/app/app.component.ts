import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ROutingSharingCRUDDemo';

  onchange(tabName:string){
    console.log("tabname =",tabName);
    
  //   switch ( tabName ) {
  //     case value1:
  //         // statement 1
  //         break;
  //     case value2:
  //         // statement 2
  //         break;
  //     case valueN:
  //         // statement N
  //         break;
  //     default: 
  //         // 
  //         break;
  //  }
  }
}
