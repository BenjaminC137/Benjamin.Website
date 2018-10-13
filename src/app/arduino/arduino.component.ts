import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})

export class ArduinoComponent implements OnInit {
	@Input() arduino: ArduinoProjectModel;

//	arduino : ArduinoProjectModel = {
//		id: 1,
//		title: 'Neechi Feeder',
//		description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
//		dateCreated: '2018/03/21',
//		dateCompleted: '2018/04/18',
//		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
//	}




  constructor() { }

  ngOnInit() {
  }

}
