import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoggerService } from './logger.service';
import { ChildComponent } from './child.component';

@NgModule({
  declarations: [
    AppComponent,  // 引入工作组件
    HighlightDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]  // 应用的根组件
})
export class AppModule { }
