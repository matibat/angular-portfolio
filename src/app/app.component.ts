import { ThemeService } from './theme.service';
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
  themeObsevable: any;
  currentTheme: string;

  constructor(public themeService: ThemeService, public config: Config) {
    this.themeObsevable = themeService.getThemeName();
    this.themeObsevable.subscribe({
      next: (currentTheme) => this.currentTheme = currentTheme,
    });
  }
}
