import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() text!: string;
  @Input() doubleClick: boolean = false;
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    const timer = 0;
    if(this.doubleClick && timer !== 0){

    }else {
      this.btnClick.emit()
    }
  }
}
