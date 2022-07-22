import { AppService } from './../Service/app.service';
import { Component, OnInit } from '@angular/core';
import { from, interval, map, range, take, takeLast } from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.scss']
})
export class PracticeComponent implements OnInit {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  observablenum = from(this.num)
  intervalcount = interval(1000)
  //  intervalcounttwo=interval(3000)
  constructor(private service: AppService) { }
  uidata: any;
  xyz: any
  mac: any = ""
  message: any=""
  ngOnInit(): void {
    this.message = this.service.getuserdata()
    console.log(this.message)
    this.service.rahul.subscribe((res: any) => {
      this.mac = res
    })

    // this.service.subservice$.subscribe((value:any)=>console.log(value))
    // this.observablenum.subscribe(value=>console.log(value))
    // this.observablenum.pipe(map(value=>value*2)).subscribe(x=>console.log(x))
    // this.intervalcount.subscribe(value=>console.log("Next= ",value))
    // let count= this.intervalcount.pipe(take(4))
    // count.subscribe(value=>console.log(value))
    // let many=range(1,100)
    // let xyz=many.pipe(takeLast(5))
    // xyz.subscribe(value=>console.log("value =",value))


    //## Using HTTP get request
    // this.service.getData().subscribe(value => console.log("response = ", value))
    this.service.getData().subscribe((element: any) => {
      this.xyz = element.studentDetails
      // console.log(this.xyz)
      // this.uidata=JSON.stringify(this.xyz)
      // this.uidata=JSON.parse(this.uidata.age)
      // this.uidata=element

      // console.log("Hello from Interceptor from component")
    })

  }
  access() {
    this.service.macchindra()
  }


  colors={
    'background-color':'Red',
    'font-size':'20px'
  }
}

