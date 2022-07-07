import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  username: any = ""
  password: any = ""

  constructor() { }
  ngOnInit(): void {
  }
  onSubmit(login: NgModel) {
    console.log("Submitted", login)
    // this.username = login.value
    // this.password = login.value
  }
}
