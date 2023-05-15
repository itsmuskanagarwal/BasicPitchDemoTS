import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AudioToMIDIComponent } from './audio-to-midi/audio-to-midi.component';

@NgModule({
  declarations: [
    AppComponent,
    AudioToMIDIComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
