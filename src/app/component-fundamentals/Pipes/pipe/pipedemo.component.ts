import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.scss']
})
export class PipedemoComponent implements OnInit {

  constructor() { }
num="fdsfdfdf"
  ngOnInit(): void {
  }
  nameString = '';
  // employees = [{
  //   firstName: 'Rohit',
  //   lastName: 'Sharma',
  //   dept: 'Finance',
  //   salary: 5000,
  //   doj: new Date('2012-04-22')
  // },
  // {
  //   firstName: 'Aditi',
  //   lastName: 'Mishra',
  //   dept: 'Sales',
  //   salary: 6000,
  //   doj: new Date('2016-09-16')
  // },
  // {
  //   firstName: 'Dipti',
  //   lastName: 'Singh',
  //   dept: 'IT',
  //   salary: 10000,
  //   doj: new Date('2021-09-03')
  // }
  // ]

  // addUser() {
  //   this.employees.push({
  //     firstName: 'Rahul',
  //     lastName: 'Yadav',
  //     dept: 'HR',
  //     salary: 8000,
  //     doj: new Date('2016-11-19')
  //   })
  // }

  // reset() {
  //   this.employees = this.employees.slice()
  // }
}
