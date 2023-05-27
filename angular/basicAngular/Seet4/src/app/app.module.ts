import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './layout/components/heroes/heroes.component';

import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './layout/components/hero-detail/hero-detail.component';
import { MessagesComponent } from './layout/components/messages/messages.component'; // <-- NgModel lives here
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
