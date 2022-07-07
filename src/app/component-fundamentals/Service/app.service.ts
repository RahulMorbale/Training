import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getData(){
    let urlpath='assets/mockdata.json'
    // let urlpath='https://fakestoreapi.com/products/category/jewelery'
    // let urlpath='https://jsonplaceholder.typicode.com/todos/1'
    // let urlpath='https://jsonplaceholder.typicode.com/users'

    return this.http.get(urlpath)
  }
} 
