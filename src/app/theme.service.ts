import { Injectable, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeNames;
  private currentTheme: string;
  private activeSubscriptions = [];

  constructor() {
    this.themeNames = {
      pink: 'pink-theme',
      red: 'red-theme',
      green: 'green-theme',
      blue: 'blue-theme',
    };
    this.currentTheme = 'pink';
  }

  private notifyUpdate() {
    console.log('[ThemeService.notifyUpdate] Sending change update to subscribers');
    this.activeSubscriptions.forEach(observer => {
      observer.next(this.themeNames[this.currentTheme]);
    });
  }

  public getThemeName() {
    console.log('[ThemeService.getTheme] New listener added');
    return new Observable((observer) => {
      // todo: check observer integrity
      observer.next(this.themeNames[this.currentTheme]);
      this.activeSubscriptions.push(observer);
    });
  }

  public changeTheme(themeName: string) {
    if (this.themeNames[themeName]) {
      this.currentTheme = themeName;
      this.notifyUpdate();
    }
  }
}
