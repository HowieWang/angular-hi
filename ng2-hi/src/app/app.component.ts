import { Component, OnInit } from '@angular/core';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hi，ng2！';
  private greeting:string;
  private isShowMore: boolean;
  private msgToChild: string;
  private msgFromChild: string;
  constructor(private logger: LoggerService) {
  }

  ngOnInit () {
    this.greeting = 'morning, ng2!'
    this.msgToChild = 'msg from daddy';
    this.logger.debug('初始化成功，logger服务启动正常')
  }

  receive(msg: string) {
    this.msgFromChild = msg;
  }
}
