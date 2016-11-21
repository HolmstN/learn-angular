import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CharacterComponent } from './character.component'

import { CharacterService } from './character.service'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    CharacterComponent
  ],
  providers:    [ CharacterService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
