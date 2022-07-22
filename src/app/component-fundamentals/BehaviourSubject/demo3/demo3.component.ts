import { AppService } from './../../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {
  demo3: any = ""
  constructor(private service: AppService) { }
  manohardata:any
  ngOnInit(): void {
    this.manohardata=this.service.raginiget()
    this.service.subject.subscribe((res: any) => {
      this.demo3 = res
    })
  }
  Submit(value: any) {
    this.service.dataSubject(value)
  }

}
