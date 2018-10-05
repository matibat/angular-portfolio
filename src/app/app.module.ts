import { ClockComponent } from './widgets/clock/clock.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Config } from './app.config';
// import { DisplayrComponent } from './displayr.component';
import { DisplayrDirective } from './displayr.directive';
import { ThemeService } from './theme.service';
import { ColorPickerComponent } from './widgets/color-picker/color-picker.component';
import { ColorPickerPalleteComponent } from './widgets/color-picker/color-picker-pallete/color-picker-pallete.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClockComponent,
    GalleryComponent,
    // DisplayrComponent,
    DisplayrDirective,
    ColorPickerComponent,
    ColorPickerPalleteComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    Config,
    ThemeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
