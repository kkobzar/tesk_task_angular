import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {

  @Input() time!: number

  constructor() { }

  ngOnInit(): void {

  }
  getSec():string{
    const secs = Math.floor(this.time * 0.01)
    return secs >= 10 ? secs.toString() : `0${secs}`
  }

  //get
  getMS():string{
    const ms = this.time - Math.floor(this.time * 0.01) * 100
    return ms >= 10 ? ms.toString() : `0${ms}`
  }

}
