import { ThemeService } from './../../theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-component',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent implements OnInit {
  public title = 'Choose a theme';
  public colors = ['pink', 'red', 'green', 'blue'];
  public isPalleteVisible = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {

  }

  toggleVisibility() {
    console.log('[ColorPickerComponent.toggleVisibility()] Visibility changed');
    this.isPalleteVisible = !this.isPalleteVisible;
  }

  selectTheme(theme: string) {
    console.log('[ColorPicker.selectTheme()] Theme ' + theme + ' selected');
    this.themeService.changeTheme(theme);
  }
}
