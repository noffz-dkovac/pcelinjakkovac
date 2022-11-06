import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PescaraComponent } from './components/pescara/pescara.component';
import { PcelinjakComponent } from './components/pcelinjak/pcelinjak.component';
import { ProizvodiComponent } from './components/proizvodi/proizvodi.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    PescaraComponent,
    PcelinjakComponent,
    ProizvodiComponent,
    KontaktComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
