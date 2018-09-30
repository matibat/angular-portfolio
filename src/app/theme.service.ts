import { Injectable } from '@angular/core';

const THEMES = {
  pink: 'pink-theme',
  red: 'red-theme',
  green: 'green-theme',
  blue: 'blue-theme',
};

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  // todo create variable containing curreht state

  constructor() { }
}
