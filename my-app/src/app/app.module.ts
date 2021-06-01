import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lession1Component } from './components/lession1/lession1.component';
import { Lession2Component } from './components/lession2/lession2.component';

@NgModule({
  declarations: [
    AppComponent,
    Lession1Component,
    Lession2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
