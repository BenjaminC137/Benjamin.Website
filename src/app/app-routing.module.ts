import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 	   './home/home.component';
import { ArduinoComponent } from 	   './arduino/arduino.component';
import { ArduinoDetailComponent } from './arduino-detail/arduino-detail.component';
import { PersonalComponent } from 	   './personal/personal.component';
import { ProfessionalComponent } from 	   './professional/professional.component';
import { NotFoundComponent } from './not-found/not-found.component'

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: HomeComponent },
	{ path: 'arduino', component: ArduinoComponent },
	{ path: 'arduino-detail/:id', component: ArduinoDetailComponent },
	{ path: 'personal', component: PersonalComponent },
	{ path: 'professional', component: ProfessionalComponent },
	{ path: 'Neechi%20Feeder.html', redirectTo: '/Neechi%20Feeder', pathMatch: 'full'},
	{ path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
