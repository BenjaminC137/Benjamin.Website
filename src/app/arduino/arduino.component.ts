import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
import { ArduinoProjects } from '../arduino-projects';

@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})

export class ArduinoComponent implements OnInit {
	@Input() arduino: ArduinoProjectModel;

	public show: boolean = false;
	public buttonName:any = 'show';

  constructor() { }

  ngOnInit() {
  }

	toggle(){
		this.show = !this.show;
	}

  arduinoProjects = ArduinoProjects;

  selectedArduino: ArduinoProjectModel;

  onSelect(arduino: ArduinoProjectModel): void {
  this.selectedArduino = arduino;
}
