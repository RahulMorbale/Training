import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Testproject';
  // message=alert("Hello")
  // src="assets/Raindropmemory-Artificial-Girl-App.ico"
  // message="hello"
  // display() {
    // alert("submitted")
  // }
  show=false
  value="show"
  hideshow(value:any){
    this.value=this.value=='show'?'hide':'show'
    this.show=!this.show
  }
    
}


