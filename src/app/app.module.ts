import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConversorComponent } from './temperatura/temperatura.component';
import { FormatWidth } from '@angular/common';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { MenuComponent } from './menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { CinepolisComponent } from './cinepolis/cinepolis.component';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent,
    MultiplicacionComponent,
    MenuComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
