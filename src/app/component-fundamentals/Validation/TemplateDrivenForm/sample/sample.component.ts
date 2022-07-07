import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  // name:any=''
  // address:any=''
  // a='[]'

  name:any=''
// store=''
  Alert(){
    alert("hello")
    // this.store='hello'
  }

}
