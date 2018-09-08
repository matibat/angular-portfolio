import { Component, ModuleWithComponentFactories } from '@angular/core';

import * as moment from 'moment';

const TIME_FORMAT = 'hh:mm:ss A';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor () {
    console.log('[AppComponent::constructor] App started runing at ' + moment().format(TIME_FORMAT));
    this.timer = setInterval(() => this.time = moment().format(TIME_FORMAT), 1);
  }
  title = 'portfolio';
  time: string;
  timer: any;
}
