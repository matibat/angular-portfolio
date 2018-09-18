import { GalleryComponent } from './pages/gallery/gallery.component';
import { Injectable, Component } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Config {
  pages = {
    'gallery-component': GalleryComponent
  };
}
