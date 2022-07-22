import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  subservice$ = new ReplaySubject(1)
  accountbalance = 5000
  subject = new BehaviorSubject(this.accountbalance);//subject
  subject2 = new Subject()
  rahul = new Subject()
  macchindra() {
    return this.rahul.next("Hello Mac")
  }
  constructor(private http: HttpClient) { }

  dataSubject(data: any) {
    this.subject.next(data.value);
  }
  maindata(element: any) {
    this.subject2.next(element.value)
  }

  getData() {
    let urlpath = 'assets/mockdata.json'
    // let urlpath='https://fakestoreapi.com/products/category/jewelery'
    // let urlpath='https://jsonplaceholder.typicode.com/todos/1'
    // let urlpath='https://jsonplaceholder.typicode.com/users'

    return this.http.get(urlpath)
  }

  collect: string = ""
  getuserdata(): string {
    return this.collect
  }

  setdata(data: string) {
    this.collect = data
  }



  storemaindata = ""

  raginiget() {
    return this.storemaindata
  }
  jyotiset(data: any) {
    this.storemaindata = data
  }


  uniquedata = ""

  macchindraget(){
    return this.uniquedata
  }

  manoharset(el:any){
    this.uniquedata=el
  }

} 
