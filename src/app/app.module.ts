import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ArduinoComponent } from './arduino/arduino.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArduinoDetailComponent } from './arduino-detail/arduino-detail.component';
import { FormsModule } from '@angular/forms';
import { ProfessionalComponent } from './professional/professional.component';
import { PersonalComponent } from './personal/personal.component';
import { AppRoutingModule } from './/app-routing.module';
//import { ArduinoProjects } from './arduino-projects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArduinoComponent,
    NavBarComponent,
    ArduinoDetailComponent,
    ProfessionalComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
	  FormsModule,
	  AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
