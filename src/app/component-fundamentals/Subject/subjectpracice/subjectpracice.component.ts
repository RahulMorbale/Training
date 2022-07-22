import { Router } from '@angular/router';
import { AppService } from './../../Service/app.service';
import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjectpracice',
  templateUrl: './subjectpracice.component.html',
  styleUrls: ['./subjectpracice.component.scss']
})
export class SubjectpraciceComponent implements OnInit {
  // subjectobj=new Subject() 
  behaviour = new BehaviorSubject(0)
  // behaviour = new ReplaySubject(2)
  // behaviour = new AsyncSubject()
  receivedata: any
  ObserverA: any
  ObserverB: any
machidata:any
  constructor(private service: AppService, private router: Router) { }
  ngOnInit(): void {

    this.machidata=this.service.macchindraget()
    this.behaviour.subscribe({
      next: (v: any) => {
        console.log("Replay Observer A =", v)
        this.ObserverA = v
      }
    })
    this.behaviour.next(1)
    this.behaviour.next(2)
    this.behaviour.next(3)

    this.behaviour.subscribe((el: any) => {
      console.log("Replay Observer B =", el)
      this.ObserverB = el
    })
    this.behaviour.next(4)
    this.behaviour.complete()





    this.service.subservice$.subscribe((value: any) => {
      this.receivedata = value
    })
    // this.subjectobj.subscribe((value:any)=>console.log(value))
    // this.subjectobj.next("Hello from subject")
    this.service.subservice$.next("1 from subject practice")
  }
  send() {
    this.service.subservice$.next("123 from subject")
    this.router.navigateByUrl('/subdemo')
  }
}
