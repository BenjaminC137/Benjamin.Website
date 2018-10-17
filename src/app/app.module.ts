import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArduinoDetailComponent } from './arduino-detail/arduino-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArduinoComponent,
    NavBarComponent,
    ArduinoDetailComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
