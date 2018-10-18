import { ArduinoProjectModel } from './arduino-project-model';

export const ArduinoProjects : ArduinoProjectModel[] = [
		{
		id: 1,
		title: 'Neechi Feeder',
		description: 'I designed a dog feeder and built the entire machine using a stepper motor, a servo motor, an LCD screen, an RTC module, custom home-made metal frame and agitator, arduino nano and everything else I used...',
		dateCreated: '2018/03/21',
		dateCompleted: '2018/04/18',
		imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8278.png",
		moreImagesPath: [
			"assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png", "assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png","assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png", "assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png", "assets/ArduinoNeechiFeeder/Neechi-door-not-cut-IMG_6596.png", "assets/ArduinoNeechiFeeder/Neechi-electronics-and-machine-IMG_7498.png", "assets/ArduinoNeechiFeeder/Neechi-electronics-dark-IMG_7545.png", "assets/ArduinoNeechiFeeder/Neechi-full-room-IMG_8273.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mount-back-IMG_8192.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mount-IMG_8181.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mount-on-motor-IMG_8174.png", "assets/ArduinoNeechiFeeder/Neechi-motor-mounted-IMG_6585.png", "assets/ArduinoNeechiFeeder/Neechi-mounted-old-stepper-IMG_7465.png", "assets/ArduinoNeechiFeeder/Neechi-room-IMG_8230.png", "assets/ArduinoNeechiFeeder/Neechi-workbench-IMG_7441.png"
		],
		videoUrl: "https://www.youtube.com/embed/lyI5C47GDH0",
		components: [
			"Arduino nano", "LCD 16X2", "servo motor", "stepper motor"
		],
		libraries: [
		"DS1302RTC.h", "Time.h", "Wire.h", "Servo.h", "LCD.h", "LiquidCrystal_I2C.h", "Stepper.h"
		]
		},
		{
		id: 2,
		title: 'Buddy (Smart Car)',
		description: 'A car that roams around the house for companionship so people don\'t feel lonely.',
		dateCreated: '2016/01/01',
		dateCompleted: '2016/01/02',
		imagePath: "assets/ArduinoBuddy/buddy-full-IMG_0423.png",
		components: [
			"Arduino nano", "Ultrasonic sensor", "car chasis", "DC motor", "wheel", "accelerometer"
		]
		},
		{
		id: 3,
		title: 'Crunch Counter',
		description: 'Counts crunches while I exercise so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things.',
		dateCreated: '2018/10/05',
		dateCompleted: '2018/10/08',
		imagePath: "assets/ArduinoCrunchCounter/crunchCounter-beta-IMG_4616.jpg"
		},
		{
		id: 4,
		title: 'Fridge Alarm',
		description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoFridgeAlarm/FridgeAlarm-box-IMG_4612.jpg"
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
		imagePath: "assets/ArduinoSmartTank/smartTank-hot-art-IMG_3017.jpeg"
		},
		{
		id: 7,
		title: 'Security System',
		description: 'Security System to fend off intruders.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg"
		},
		{
		id: 8,
		title: 'Heater Control',
		description: 'Modified a space heater to be able to turn on at given time.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1%20-%20IMG_2368%20copy.jpeg"
		},
		{
		id: 9,
		title: 'Temperature Alarm',
		description: 'Alarm that sounds when the temperature drops below a designated temperature to be set in the baby\s room by the crib to alert us if the temperature is too cold for the newborn.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg"
		},
		{
		id: 10,
		title: 'Scale',
		description: '50 Gram scale using a .001 accuracy load cell. Includes a tare.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoScale/scale-calibrating-IMG_4610.jpg"
		}

	];
