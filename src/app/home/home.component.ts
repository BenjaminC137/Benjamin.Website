import { Component, OnInit } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	arduinoProjects : ArduinoProjectModel[] = [
		{
		id: 1,
		title: 'Neechi Feeder',
		description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
		dateCreated: '2018/03/21',
		dateCompleted: '2018/04/18',
		imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8278.png"
		},
		{
		id: 2,
		title: 'Buddy (Smart Car)',
		description: 'A car that roams around the house for companionship so people don\'t feel lonely.',
		dateCreated: '2016/01/01',
		dateCompleted: '2016/01/02',
		imagePath: "assets/Buddy/buddy-full-IMG_0423.png"
		},
		{
		id: 3,
		title: 'Crunch Counter',
		description: 'Counts crunches while I exercise so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things.',
		dateCreated: '2018/10/05',
		dateCompleted: '2018/10/08',
		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
		},
		{
		id: 4,
		title: 'Fridge Alarm',
		description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoTemperatureAlarm/temperature-alarm-IMG_7652.png"
		},
		{
		id: 5,
		title: 'Home Box',
		description: 'Automatically turns on lights when you walk by. Uses the unused buttons on the TV remote to turn on or off. Has manual buttons.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoHomeBox/Homebox-complete-IMG_8136.png"
		},
		{
		id: 6,
		title: 'Smart-tank',
		description: 'Analyzes surroundings and chooses where to go.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
		},
		{
		id: 7,
		title: 'Security System',
		description: 'Security System.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/images/ArduinoNeechiFeeder/IMG_7441.png"
		}
	];



  constructor() { }

  ngOnInit() {
  }
now = Date.now().toString();
}
