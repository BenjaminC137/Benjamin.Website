import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
//import { ArduinoProjects } from '../arduino-projects';
import { ArduinoService } from '../arduino.service';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})

export class ArduinoComponent implements OnInit {
//	@Input() arduino: ArduinoProjectModel;
	arduinoProjects: ArduinoProjectModel[];

	public show: boolean = false;
	public buttonName:any = 'show';

  constructor(private arduinoService: ArduinoService) { }

  ngOnInit() {
	  this.getArduinoProjects();
  }

  getArduinoProjects(): void {
		this.arduinoService.getArduinoProjects().subscribe(arduinoProjects => this.arduinoProjects = arduinoProjects);
	}

	toggle(){
		this.show = !this.show;
	}

//  arduinoProjects = ArduinoProjects;

//  selectedArduino: ArduinoProjectModel;
//  onSelect(arduino: ArduinoProjectModel): void {
//  this.selectedArduino = arduino;
//  }
}
