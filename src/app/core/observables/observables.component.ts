import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    let obr$ = new Observable((observer) => {
      observer.next(1);
      setTimeout(() => {
        observer.next(2);
      }, 1000);
      setTimeout(() => {
        observer.next(3);
      }, 2000);
      setTimeout(() => {
        observer.error("failed ");
       
      }, 4000);
    });

    obr$
      .filter(f => { return f !== 1 })
      .subscribe(res => {
        console.log("client 1 ", res);
      });

    setTimeout(() => {
      obr$
        .map(obj => { return { count: obj }; })
        .subscribe(res => {
          console.log("client 2 ", res);
        },
      err=> {
        console.log(err)
      },
    ()=> {
      console.log("Stream data completed");
    });
    }, 5000);


  }


   obserByArray() {
    let obr$ = Observable.from([1,2,3,4,5]);

    obr$.subscribe(res=> {
      console.log("from array ",res);
    })
  }

}
