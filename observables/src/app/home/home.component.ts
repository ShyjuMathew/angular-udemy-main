import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSub: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSub = interval(1000).subscribe((count) => {
    //   console.log('Count: ', count);
    // });

    const customIntObs = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('3 tigda kaam bigda!'));
        }
        count++;
      }, 1000);
    });

    const customisedData = customIntObs.pipe(
      filter((data: number) => {
        return data !== 2;
      })
    );

    this.firstObsSub = customisedData.subscribe(
      (count) => {
        console.log(count);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        console.log('Completed !');
      }
    );
  }
  ngOnDestroy() {
    this.firstObsSub.unsubscribe();
  }
}
