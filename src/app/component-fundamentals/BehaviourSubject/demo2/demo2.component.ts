import { AppService } from './../../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
demo2:any=""
  constructor(private service:AppService) { }
raginidata:any
  ngOnInit(): void {
    this.raginidata=this.service.raginiget()
    this.service.subject.subscribe((res:any)=>{
      this.demo2=res
    })
  }
  submit(value:any){
this.service.dataSubject(value)
  }
}
