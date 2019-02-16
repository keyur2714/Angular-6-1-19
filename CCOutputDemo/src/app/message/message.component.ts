import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input('message')
  msg : string = '';

  @Output('getFromattedMessage')
  getFromattedMsg = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    // console.log(1);
    // this.getFromattedMsg.emit("Hello "+this.msg);    
  }

  sendMessage(){
    console.log(1);
    this.getFromattedMsg.emit("Hello "+this.msg);    
  }
}
