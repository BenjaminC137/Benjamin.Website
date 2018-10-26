import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
//import { ArduinoProjects } from '../arduino-projects';
import { ArduinoService } from '../arduino.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	arduinoProjects: ArduinoProjectModel[];

  constructor(private arduinoService: ArduinoService) { }

  ngOnInit() {
	  this.getArduinoProjects();
  }

  getArduinoProjects(): void {
		this.arduinoService.getArduinoProjects().subscribe(arduinoProjects => this.arduinoProjects = arduinoProjects);
	}
now = Date.now().toString();

//  arduino = ArduinoProjectModel;
//
//  selectedArduino: ArduinoProjectModel;
//
//  onSelect(arduino: Arduino): void {
//    this.selectedArduino = arduino;
//  }

}
