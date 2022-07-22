import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.scss']
})
export class NgswitchComponent implements OnInit {
  day:any
  constructor() { }

  ngOnInit(): void {
  }
  enter(value:any){
    this.day=value.value
  }
}
