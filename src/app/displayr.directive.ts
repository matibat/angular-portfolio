import { Directive, ElementRef, Renderer2, ContentChild, AfterContentInit } from '@angular/core';
import { MatTabHeader } from '@angular/material';
import { GalleryComponent } from './pages/gallery/gallery.component';

@Directive({
  selector: '[appDisplayr]'
})
export class DisplayrDirective implements AfterContentInit {
  @ContentChild(GalleryComponent) gallery: GalleryComponent;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterContentInit() {
    // About to manipulate DOM
    const header = document.getElementsByClassName('mat-tab-header')[0];
    if (header) {
      console.log('[Displayr::ngAfterContentInit] About to create icon element into .mat-tab-header element');
      const newChild = document.createElement('img');
      newChild.src = 'assets/img/pirat.png';
      newChild.classList.add('icon');
      header.insertBefore(newChild, header.firstChild); // insert image in first position
    } else {
      console.log('[Displayr::ngAfterContentInit]! Could not render image: material tab header not found');
    }
  }
}
