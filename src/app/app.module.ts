import { ClockComponent } from './widgets/clock.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { Config } from './app.config';
// import { DisplayrComponent } from './displayr.component';
import { DisplayrDirective } from './displayr.directive';

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
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTabsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [
    Config
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
