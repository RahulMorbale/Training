import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  name = new FormControl('')
  address = new FormControl('')

  details = new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(4),Validators.minLength(4),Validators.pattern("^[a-z]{4,4}")]),
    mobno: new FormControl(''),
    address: new FormControl('')
  })

  submit() {
    console.log(this.stud)
  }

  stud = [{
    name: 'Manohar',
    mobno: 111,
    address: 'nashik'
  },
  {
    name: 'Jyoti',
    mobno: 222,
    address: 'Pune'
  },
  {
    name: 'Rahul',
    mobno: 333,
    address: 'Kolhapur'
  }
  ]

  ngOnInit(): void {
  }

}
