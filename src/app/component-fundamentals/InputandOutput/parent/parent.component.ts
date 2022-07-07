import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  messages = "Hello from Parent"                                                               // parent property store the message this property used for bind with child Input decorator property
  parentdata = "student details in table format"
  // public students:  any[]=[]

  show: any = ""
  // mytext="Property binding not wroking"
  // src = "assets/Raindropmemory-Artificial-Girl-App.ico"
  parentmethod(a: any) {                                                                     // 'a' is the parameter we can write any name of parameter 
    //                                                                  we pass a parameter becoz in we pass $event in parent html page in event binding (i.e. (childevent)="parentmethod($event)")
    this.detailsfromchild = a
  }
  
  detailsofchild = []
  
  listdata(event: any) {
    this.detailsofchild=event
    console.log(event)
  }
  detailsfromchild : any= ""


  ashish = "Hello ashish from parent###########################"

  constructor() { }
  ngOnInit(): void {
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


