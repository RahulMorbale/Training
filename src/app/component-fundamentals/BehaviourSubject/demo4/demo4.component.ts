import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Service/app.service';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  demo4:any=""
  constructor(private service:AppService) { }

  ngOnInit(): void {
    this.service.subject2.subscribe((res:any)=>{
      this.demo4=res
    })
  }
Submit(value:any){
  this.service.maindata(value)
}
}
