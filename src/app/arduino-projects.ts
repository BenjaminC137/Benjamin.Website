import { ArduinoProjectModel } from './arduino-project-model';

export const ArduinoProjects : ArduinoProjectModel[] = [
		{
		id: 1,
		title: 'Neechi (dog) Feeder',
		description: 'I designed a dog feeder and built the entire contraption. It automatically releases a designated amount of food twice per day based on a predetermined feeding schedule. An Led display shows the current time, the quantity of times fed per day and the time in which the last feeding was released including manual feedings. A button allows for manual feeding.',
		dateCreated: '2018/03/21',
		dateCompleted: '2018/04/18',
		imagePath: "assets/ArduinoNeechiFeeder/Neechi-full-IMG_8273.jpeg",
		moreImagesPath: [
			"assets/ArduinoNeechiFeeder/Neechi-agitator-assembly-IMG_8224.png", //1
			"assets/ArduinoNeechiFeeder/Neechi-agitator-rod-IMG_8261-2.png", //2
			"assets/ArduinoNeechiFeeder/Neechi-door-not-cut-IMG_6596.png", //3
			"assets/ArduinoNeechiFeeder/Neechi-electronics-dark-IMG_7545.png", //4
			"assets/ArduinoNeechiFeeder/Neechi-electronics-and-machine-IMG_7498.png", //5
			"assets/ArduinoNeechiFeeder/Neechi-motor-mount-back-IMG_8192.png", //6
			"assets/ArduinoNeechiFeeder/Neechi-motor-mount-IMG_8181.png", //7
			"assets/ArduinoNeechiFeeder/Neechi-motor-mount-on-motor-IMG_8174.png", //8
			"assets/ArduinoNeechiFeeder/Neechi-motor-mounted-IMG_6585.png", //9
			"assets/ArduinoNeechiFeeder/Neechi-mounted-old-stepper-IMG_7465.png", //10
			"assets/ArduinoNeechiFeeder/Neechi-room-IMG_8230.png", //11
			"assets/ArduinoNeechiFeeder/Neechi-workbench-IMG_7441.png" //12
		],
		imageCaption: [
			"Agitator assembly including agitator rod, stepper motor and motor housing", //1
			"Agitator rod: Folded sheet steel and twisted to create an agitator that will spiral and thus push food out so food doesn't get stuck.", //2
			"Hatch door mounted to hatch mount before cutting the opening hole", //3
			"Electronics in the dark. Often times, uncompleted electronics are quite astheticly pleasing.", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"Creating and constructing the agitator assemply", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "https://www.youtube.com/embed/lyI5C47GDH0",
		components: [
			"Arduino nano",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module",
			"servo motor",
			"stepper motor"
		],
		libraries: [
			"DS1302RTC.h",
			"Time.h",
			"Wire.h",
			"Servo.h",
			"LCD.h",
			"LiquidCrystal_I2C.h",
			"Stepper.h"
		]
		},
		{
		id: 2,
		title: 'Buddy (Smart Car)',
		description: 'A car that roams around the house for companionship so people don\'t feel lonely.',
		dateCreated: '2016/01/01',
		dateCompleted: '2016/01/02',
		imagePath: "assets/ArduinoBuddy/buddy-full-top-IMG_0541.jpeg",
		moreImagesPath: [
			"assets/ArduinoBuddy/buddy-full-front-IMG_0542.jpeg", //1
			"assets/ArduinoBuddy/buddy-full-old-IMG_0423.png" //2
		],
		imageCaption: [
			"3 pairs - Ultrasonic sensors", //1
			"First iteration with single ultrasonic sensor", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"Ultrasonic sensor",
			"car chasis",
			"DC motor",
			"wheel",
			"accelerometer",
			"led"
		],
		libraries: [
			"none"
		]
		},
		{
		id: 3,
		title: 'Crunch Counter',
		description: 'Counts crunches while I exercise so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things.',
		dateCreated: '2018/10/05',
		dateCompleted: '2018/10/08',
		imagePath: "assets/ArduinoCrunchCounter/crunchCounter-beta-IMG_4616.jpg",
		moreImagesPath: [
			"assets/coming-soon.png" //1
		],
		imageCaption: [
			"", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "cooming soon",
		components: [
			"Arduino nano",
			"photoresistor",
			"led",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module",
			"buzzer"
		],
		libraries: [
			"Wire.h",
			"LCD.h",
			"LiquidCrystal_I2C.h"
		]
		},
		{
		id: 4,
		title: 'Fridge Alarm',
		description: 'Box on fridge buzzes and flashes when open too long or it doesn\'t fully close.',
		dateCreated: '2017/09/01',
		dateCompleted: '2017/09/02',
		imagePath: "assets/ArduinoFridgeAlarm/FridgeAlarm-box-IMG_4612.jpg",
		moreImagesPath: [
			"assets/ArduinoFridgeAlarm/FridgeAlarm-button-IMG_4614.jpg" //1
		],
		imageCaption: [
			"Button that gets pushed when the door closes", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"button",
			"led",
			"buzzer"
		],
		libraries: [
			"none"
		]
		},
		{
		id: 5,
		title: 'Home Box',
		description: 'Automatically turns on lights when you walk by. Uses the unused buttons on the TV remote to turn on or off. Has manual buttons.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/12/08',
		imagePath: "assets/ArduinoHomeBox/Homebox-complete-IMG_8136.png",
		moreImagesPath: [
			"assets/ArduinoHomeBox/HomeBox-breadboardPrep-IMG_1757.jpeg"
		],
		imageCaption: [
			"Electrical tapes hold the wires to the breadboards while the prototype is tested", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"button",
			"IR receiver",
			"5V relay module"
		],
		libraries: [
			"IRremote.h"
		]
		},
		{
		id: 6,
		title: 'Smart-tank',
		description: 'Analyzes surroundings and chooses where to go.',
		dateCreated: '2018/01/07',
		dateCompleted: '2018/01/21',
		imagePath: "assets/ArduinoSmartTank/smartTank-hot-art-IMG_3017.jpeg",
		moreImagesPath: [
			"assets/coming-soon.png" //1
		],
		imageCaption: [
			"image placeholder", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"DC motor",
			"led",
			"RF receiver",
			"RF transmitter",
			"button",
			"led",
			"servo motor",
			"ultrasonic sensor",
			"wheel",
			"treads",
			"triangle vehicle chasis",
			"potentiometer"
		],
		libraries: [
			"SPI.h",
			"RH_ASK.h",
			"Servo.h",
		]
		},
		{
		id: 7,
		title: 'Security System',
		description: 'Security System to fend off intruders. Exact dates unknown',
		dateCreated: '2018/07/01',
		dateCompleted: '2018/07/02',
		imagePath: "assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg",
		moreImagesPath: [
			"assets/coming-soon.png" //1
		],
		imageCaption: [
			"image placeholder", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"common cathode RGB led",
			"PIR proximety sensor"
		],
		libraries: [
			"none"
		]
		},
		{
		id: 8,
		title: 'Heater Control',
		description: 'Modified a space heater to be able to turn on at given time.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/12/10',
		imagePath: "assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1%20-%20IMG_2368%20copy.jpeg",
		moreImagesPath: [
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-board-bottom-partial - IMG_2343 copy.jpeg", //1
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-board-bottom-partial-withBackground - IMG_2342 copy.jpeg", //2
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-board-top - IMG_2363 copy.jpeg", //3
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1 - IMG_2368 copy.jpeg", //4
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables2 - IMG_2367 copy.jpeg", //5
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardComplete - IMG_2366 copy.jpeg", //6
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardSide - IMG_2365 copy.jpeg", //7
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-Controller - IMG_1740 copy.jpeg", //8
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-Cable-entry-internal - IMG_1741 copy.jpeg", //9
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-cableExit - IMG_1742 copy.jpeg", //10
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-CableExit2 - IMG_1754 copy.jpeg", //11
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController1 - IMG_1747 copy.jpeg", //12
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController2 - IMG_1753 copy.jpeg" //13
		],
		imageCaption: [
			"Bottom of the circuit board I made for condensing the wiring.", //1
			"By condensing the electronics by creating this board, it will allow me to fit all of the components into the tiny project-box/housing.", //2
			"Top view of the board (This is very cool).", //3
			"Top view of the board whilst connected to the wires.", //4
			"Board is ready to be inserted into the housing.", //5
			"Beautiful shot of the board with test LEDs", //6
			"Side shot of the board with test LEDs to show board's thickness", //7
			"Jumper wires soldered to the existing space heater's controller board", //8
			"Wires are fed through a hole I drilled to connect to the arduino externally", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"led",
			"IC 4066 quad bilateral switch",
			"button"
		],
		libraries: [
			"none"
		]
		},
		{
		id: 9,
		title: 'Temperature Alarm',
		description: 'Alarm that sounds when the temperature drops below a designated temperature to be set in the baby\s room by the crib to alert us if the temperature is too cold for the newborn.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg",
		moreImagesPath: [
			"assets/ArduinoTemperatureAlarm/temperature-alarm-pano-IMG_7720.png",
			"assets/ArduinoTemperatureAlarm/temperature-alarm-workspace-MG_7652.png"
		],
		imageCaption: [
			"", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"button",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module"
		],
		libraries: [
			"Wire.h",
			"LCD.h",
			"LiquidCrystal_I2C.h"
		]
		},
		{
		id: 10,
		title: 'Scale',
		description: '50 Gram scale using a .001 accuracy load cell. Includes a tare feature.',
		dateCreated: '2017/01/01',
		dateCompleted: '2017/01/01',
		imagePath: "assets/ArduinoScale/scale-calibrating-IMG_4610.jpg",
		moreImagesPath: [
			"assets/coming-soon.png"
		],
		imageCaption: [
			"", //1
			"", //2
			"", //3
			"", //4
			"", //5
			"", //6
			"", //7
			"", //8
			"", //9
			"", //10
			"", //11
			"", //12
			"", //13
			"", //14
			"" //15
		],
		videoUrl: "coming soon",
		components: [
			"Arduino nano",
			"button",
			"HX711 Load Cell Amplifier",
			"load cell",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module"
		],
		libraries: [
			"hx711.h",
			"DHT.h",
			"Wire.h",
			"LCD.h",
			"LiquidCrystal_I2C.h"
		]
		}
	];
