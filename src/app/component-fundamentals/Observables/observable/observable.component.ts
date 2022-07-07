import { Component, OnInit } from '@angular/core';
import { from, interval, map, range, take, takeLast } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  names = ["Rahul", "Manohar", "Jyoti", "Ragini", "Macchindra"]
  observablenames = from(this.names)
  obervablenumber = from(this.number) //## obervablenumber is a 'observable' created using 'from' operator
  intervalcount = interval(3000)
  constructor() { }
  ngOnInit(): void {
    //## Rxjs operators=> from,interval,map,range,take,takelast,takeuntil,takewhile,skip.
    // this.obervablenumber.subscribe(value=>console.log(value))
    //## (Pipe())=> it is a method/function of observable. 
    //##         => it is used to combine multiple Rxjs operators(like map,filter). it returns Rxjs Observable
    // this.obervablenumber.pipe(map(value => value * 2)).subscribe(value => console.log(value))
    //## (map())=> map() transforms each value of the source Observable using the passed formula. 
    //##        => In our case, (value => value * 2) i.e=> it multiplies each value by two.
    // this.observablenames.subscribe(value => console.log(value))
    // this.intervalcount.subscribe(x => console.log(`Hi ${x} hello`))
    //##   ${} is just a lot cleaner to insert variable in a string then using +:
    //##   let x = 5;
    //##   console.log("hello world " + x + " times");  o/p:-"hello world 5 times"
    //##   console.log(`hello world ${x} times`);       o/p:-"hello world 5 times"
    //##   for ${} to work, the string needs to be enclosed in backticks.
    let takefournumbers = this.intervalcount.pipe(take(4))
    // takefournumbers.subscribe(value => console.log("Next: ", value)) // o/p :- Next:0,Next:1,Next:2,Next:3
    let many = range(1,100)  //## syntax=>range(start: number, count?: number)
    let takelastnumbers = many.pipe(takeLast(3))
    // takelastnumbers.subscribe(value => console.log("numbers:", value)) // o/p :- numbers:98,Numbers:99,Numbers:100  }
  }
}
