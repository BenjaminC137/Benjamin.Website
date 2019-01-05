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
import { NotFoundComponent } from './not-found/not-found.component';
import { FireballComponent } from './fireball/fireball.component';
import { PhotographyComponent } from './photography/photography.component';
import { FilterPipe } from './filter.pipe';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FilterComponentsPipe } from './filter-components.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArduinoComponent,
    NavBarComponent,
    ArduinoDetailComponent,
    ProfessionalComponent,
    PersonalComponent,
    NotFoundComponent,
    FireballComponent,
    PhotographyComponent,
    FilterPipe,
    FilterComponentsPipe
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
