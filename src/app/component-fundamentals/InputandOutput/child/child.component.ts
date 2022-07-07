import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() childData: any = ''// @Input is a decorator and 'childData'=>is property of Input decorator
  @Input() data: any = ''// 'any'=> datatype   (send data from parent => child)
  @Input() parentobj: any = []
  @Output() childevent = new EventEmitter<any>();
  @Output() childobj = new EventEmitter<any>();
  //##  @Output() eventName = new EventEmitter<eventType>(); // ( send data from child => parent)
  //##  syntax of Output Decorator=> @Output() eventName/property = new EventEmitter<eventType/datatype>();
  displaychilddata() {      //##   this is a method we pass this method in button click event
    this.childevent.emit('Hello from child')  //##  emit is a method to use for pass the data/value  
  }
  details = "Hello ashish from child!!!!!!!!!!! "
  send() {
    this.childevent.emit(this.details)
  }
  list() {

    this.childobj.emit(this.studentdetails)
  }

  constructor() { }
  ngOnInit(): void {
  }

  studentdetails = [
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

