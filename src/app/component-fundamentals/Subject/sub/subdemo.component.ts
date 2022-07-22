import { Component, OnInit } from '@angular/core';
import { AppService } from '../../Service/app.service';

@Component({
  selector: 'app-subdemo',
  templateUrl: './subdemo.component.html',
  styleUrls: ['./subdemo.component.scss']
})
export class SubdemoComponent implements OnInit {

  constructor(private service: AppService) { }
  fromsubpracice: any
  // subjectdatareceive: any
  ngOnInit(): void {

    this.service.manoharset("Hi machindra")
    this.service.subservice$.subscribe((value: any) => {
      console.log(value)
      this.fromsubpracice = value
    })
    // this.service.subservice$.subscribe((el: any) => {
    //   this.subjectdatareceive = el
    // })
  }
  senddata() {
    this.service.subservice$.next('Hello from subdemo component')
  }
}
