import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
Default=0
  constructor() { }

  ngOnInit(): void {
  }

number(value:any){
  value=='add' ? this.Default++ : this.Default-- 
}
plus(){
this.Default++
}
minus(){
this.Default--
}

}
