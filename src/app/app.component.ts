import { Component, ModuleWithComponentFactories } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Config } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  constructor(public config: Config) { }
}
