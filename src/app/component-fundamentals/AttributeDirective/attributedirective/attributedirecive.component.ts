import { AppService } from './../../Service/app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedirecive',
  templateUrl: './attributedirecive.component.html',
  styleUrls: ['./attributedirecive.component.scss']
})
export class AttributedireciveComponent implements OnInit {

  constructor(private service: AppService) { }
  mystyle = {
    'background-color': 'yellow'
  }

  day = "friday"
  file = "10.56"
  // mydata=this.service.collect
  msg = "Hello from attribute page using setdata method"
  ngOnInit(): void {
    this.service.setdata(this.msg)
    
    // this.mystyle = {
    //   'background-color':  (this.day === 'friday') ? 'red' : 'yellow'
    // }
    // if (this.day == "friday") {
    //   this.mystyle = {
    //     'background-color': 'blue'
    //   }
    // }else{
    //   this.mystyle = {
    //     'background-color': 'red'
    //   }
    // }
  }

  students = [
    {
      name: "Rahul",
      Address: "Kolhapur",
      Mobileno: 123
    },
    {
      name: "Pratik",
      Address: "Pune",
      Mobileno: 456
    },
    {
      name: "Swapnil",
      Address: "Pune",
      Mobileno: 789
    },
    {
      name: "Manohar",
      Address: "Mumbai",
      Mobileno: 901
    }
  ]

}
