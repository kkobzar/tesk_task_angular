import {Component, OnInit} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'timer_task';
  timer: number = 0;
  obs: Observable<number> = interval(10)
  ngOnInit() {
    this.obs.subscribe(() => {
      this.timer++;
    })
  }

  stopWatchStart() {
    this.obs.subscribe(() => {
      this.timer++;
    })
  }

}
