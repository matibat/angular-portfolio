import { Component } from '@angular/core';
import * as moment from 'moment';

const TIME_FORMAT = 'hh:mm:ss A';

@Component({
  selector: 'app-clock-component',
  templateUrl: './clock.component.html'
})
export class ClockComponent {
  constructor () {
    console.log('[ClockComponent::constructor] App started runing at ' + moment().format(TIME_FORMAT));
    this.timer = setInterval(() => this.time = moment().format(TIME_FORMAT), 1);
  }
  time: string;
  timer: any;
}
