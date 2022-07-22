import { AppService } from './../../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {
  
  demo1: any = '';

  constructor(private service: AppService) {
   }
  ngOnInit(): void {

    this.service.jyotiset("Welcome ragini")
    this.service.subject.subscribe((res:any)=>{
      console.log(res)
      this.demo1=res
    })
  }
  submit(value:any){
    this.service.dataSubject(value)
  }

}
