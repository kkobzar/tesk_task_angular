import {Component, OnInit} from '@angular/core';
import {interval, Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'timer_task';
  timer: number = 0;
  obs: Observable<number> = interval(10)
  subsc!: Subscription;
  ngOnInit() {
  }

  stopWatchStart() {
    this.subsc = this.obs.subscribe(() => {
      this.timer++;
    })
  }

  stopWatchReset() {
    this.timer = 0;
  }

  stopWatchStop() {
    this.subsc.unsubscribe()
  }

}
