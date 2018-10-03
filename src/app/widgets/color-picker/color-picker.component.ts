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

  constructor() { }

  ngOnInit() {
  }

  toggleVisibility() {
    console.log('[ColorPickerComponent.toggleVisibility()] Visibility changed');
    this.isPalleteVisible = !this.isPalleteVisible;
  }
}
