import { Component, OnInit } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})
export class ArduinoComponent implements OnInit {

	arduino : ArduinoProjectModel = {
		id: 1,
		title: 'Neechi Feeder',
		description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
		dateCreated: '2018/01/01',
		dateCompleted: '2018/01/02',
		imagePath: 'assets/rick-prison.png'
	}

  constructor() { }

  ngOnInit() {
  }

}
