import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {interval, Observable} from "rxjs";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() doubleClick: boolean = false;
  @Output() btnClick = new EventEmitter();
  clicked:boolean = false;
  obs: Observable<any> = interval(500)

  constructor() { }

  ngOnInit(): void {
    this.obs.subscribe(() => {
      this.clicked = false;
    })
  }

  onClick(){
    if(this.doubleClick){
      if (this.clicked){
        this.btnClick.emit()
      }else {
        this.clicked = true;
      }
    }else {
      this.btnClick.emit()
    }
  }
}
