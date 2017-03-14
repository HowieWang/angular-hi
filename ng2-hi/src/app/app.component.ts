import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hi，ng2！';
  private greeting:string;
  constructor() {
  }

  ngOnInit () {
    this.greeting = 'morning, ng2!'

  }
}
