import { ArduinoProjectModel } from './arduino-project-model';

export const ArduinoProjects : ArduinoProjectModel[] = [
	{
		id: 1,
		title: 'Neechi (dog) Feeder',
		description: 'I designed an automatic dog feeder and built the entire contraption. It automatically releases a designated amount of food twice per day based on a predetermined feeding schedule. An LCD display shows the current time, the quantity of times fed per day and the time in which the last feeding was released including manual feedings. A button allows for manual feeding. This is my favorite project as it is the most useful, most advanced and most fun to develop and build.',
		dateCreated: '2018/03/21',
		dateCompleted: '2018/04/18',
		imagePath: "assets/ArduinoNeechiFeeder/Neechi-hanging-closeup-IMG_5184.jpeg",
		moreImagesPath: [
			"assets/ArduinoNeechiFeeder/Neechi-hanging-closeup-IMG_5184.jpeg", //0
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
			"assets/ArduinoNeechiFeeder/Neechi-workbench-IMG_7441.png", //12
			"assets/ArduinoNeechiFeeder/Neechi-hanging-downward-angle-IMG_5188.jpeg", //13
			"assets/ArduinoNeechiFeeder/Neechi-broken-power-adapter-IMG_5150.jpeg", //14
			"assets/ArduinoNeechiFeeder/Neechi-custom-power-adapter-IMG_5190.jpeg", //15
			"assets/ArduinoNeechiFeeder/Neechi-hanging-medium-shot-IMG_5186.jpeg", //16
			"assets/ArduinoNeechiFeeder/Neechi-hanging-wide-shot-IMG_5189.jpeg", //17
			"assets/ArduinoNeechiFeeder/Neechi-power-adapters-IMG_5161.jpeg", //18
			"assets/ArduinoNeechiFeeder/Neechi-power-adapters-in-case-IMG_5162.jpeg", //19
			"assets/ArduinoNeechiFeeder/Neechi-power-adapters-taped-IMG_5164.jpeg", //20
			"assets/ArduinoNeechiFeeder/Neechi-full-IMG_8273.jpeg", //21
			"assets/ArduinoNeechiFeeder/Neechi-PCB-screenshot-Screen Shot 2018-11-05 at 4.23.47 PM.png" //22
		],
		imageCaption: [
			"Neechi Feeder electronics enclosure", //0
			"Agitator assembly including agitator rod, stepper motor and motor housing", //1
			"Agitator rod: Folded sheet steel and twisted to create an agitator that will spiral and thus push food out so food doesn't get stuck.", //2
			"Hatch door mounted to hatch mount before cutting the opening hole", //3
			"Electronics in the dark. Often times, uncompleted electronics are quite astheticly pleasing.", //4
			"All of the electronic components and wires before building the board.", //5
			"Top of the stepper motor mount with universal mounting hub", //6
			"Underside of the stepper motor mount with universal mounting hub", //7
			"Stepper motor mount with universal mounting hub and stepper motor", //8
			"Stepper motor mounted to the bracket mount", //9
			"Original 5 Volt stepper motor mount assembly mounted on storage compartment. I later upgraded to a significantly more powerful motor.", //10
			"Workspace during construction. I actually cleaned everything up every day after working on it.", //11
			"Creating and constructing the agitator assemply", //12
			"Displays the current time, the last time food was released and how many times food has been released per day", //13
			"I had to break off tiny pieces of this computer charger in order to open it without damaging it.", //14
			"Completed power adapter housing for all 3 components requiring power.", //15
			"Electronics enclosure, food compartment and machine mounted on wall", //16
			"Electronics enclosure, food compartment and machine hanging from hook with bowl beneath. power assembly on the right behind the drawers.", //17
			"3 power adapters stripped from their enclosures, ready for installation into the metal housing", //18
			"3 power adapters, in the metal housing before securing", //19
			"Secured power adapters with kapton tape and electrical tape in a heat dissapating metal enclosure.", //20
			"Assembl being tested on a tripod", //21
			"Early on PCB schematic for board", //22
		],
		videoUrl: "https://www.youtube.com/embed/cQlMx21N6_M",

		components: [
			"120 Volt outlet plug",
			"5 Volt 1 amp power adapter",
			"5 Volt 55g servo motor",
			"5 Volt relay module",
			"9 Volt 1 amp power adapter",
			"12 Volt 3 amp power adapter",
			"agitator",
			"acryllic hatch door",
			"aluminum c-channel",
			"Arduino Nano",
			"button",
			"chain",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module",
			"L298 motor driver",
			"Nema 17 stepper motor",
			"power switch",
			"project box",
			"project box -metal",
			"PCB",
			"terminal block",
			"PVC pipe",
			"power strip",
			"power port",
			"stepper motor mount",
			"servo motor mount",
			"steel sheet",
			"storage compartment",
			"tripod",
			"universal mounting hub"
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
		id: 11,
		title: 'myFace',
		description: "A remote controlled vehicle with an iPhone holder to use FaceTime, and a grabber to grab things. Essentially, you can control a car while looking through another device in the house and see where you are going through the iPhone's camera. And, grab things if you'd like. It is actually two projects with two Arduinos and two sketches. One for the vehicle, and one for the remote.",
		dateCreated: '2018/11/27',
		dateCompleted: '2018/12/16',
		imagePath: "assets/ArduinomyFace/myFace-key_photo-IMG_6979.jpeg",
		moreImagesPath: [
			"assets/ArduinomyFace/myFace-key_photo-IMG_6979.jpeg", // 0
			"assets/ArduinomyFace/myFace-remote-IMG_8114.jpeg", //1
			"assets/ArduinomyFace/myFace-side_high_angle-IMG_6965.jpeg", //2
			"assets/ArduinomyFace/myFace-rear-IMG_6968.jpeg", //3
			"assets/ArduinomyFace/myFace-profile-IMG_6966.jpeg", //4
			"assets/ArduinomyFace/myFace-workspace-IMG_6071.jpeg", //5
			"assets/ArduinomyFace/myFace-front_view-good_photo_phone_off-IMG_6963.jpeg", //6
			"assets/ArduinomyFace/myFace-front_side_phone_off-IMG_6964.jpeg", //7
			"assets/ArduinomyFace/myFace-front_my_reflection-IMG_6970.jpeg", //8
			"assets/ArduinomyFace/myFace-fail_upsidedown-IMG_6210.jpeg", //9
			"assets/ArduinomyFace/myFace-alpha_with_phone-IMG_6077.jpeg", //10
			"assets/ArduinomyFace/myFace-alpha_holder-IMG_6173.jpeg", //11
			"assets/ArduinomyFace/myFace-alpha_backwards_holder-IMG_6179.jpeg", //12
			"assets/ArduinomyFace/myFace-alpha_with_electronics-IMG_6214.jpeg", //13
			"assets/ArduinomyFace/myFace-frame-IMG_6069.jpeg" //14
		],
		imageCaption: [
			"Hey! It's me!", //0
			"RF Tranceiver remote. I used an Arduino Nano.", //1
			"It's not actually hovering, but it sure looks like it!", //2
			"Rear view. Arduino Mega is upright behind the yellow bread board.", //3
			"Profile view.", //4
			"Workspace during alpha assembly.", //5
			"Completed with phone off.", //6
			"You can see the back of the Arduino Mega blocking off the electronics from the range of motion of the phone assembly.", //7
			"Front view - head on. That's me in the reflection!", //8
			"#nailedit", //9
			"Alpha stage testing tilting motor for phone.", //10
			"First iteration of iPhone holder. I later bent sheet steel to make an entire holder from a single piece of steel.", //11
			"back of the original iPhone holder.", //12
			"Alpha complete with electronics onboard. Time for phase-beta!", //13
			"chassis complete. Ready for electronics installation." //14
		],
		videoUrl: "https://www.youtube.com/embed/xKGvesFFDMA",
		components: [
			"Arduino Nano",
			"Arduino Mega",
			"10 µF capacitor",
			"breadboard",
			"DC motor",
			"button",
			"battery compartment X6 AA",
			"battery AA",
			"battery 9V",
			"common cathode RGB led",
			"grabber",
			"servo motor",
			"wheel",
			"treads",
			"vehicle chassis",
			"potentiometer",
			"NRF24L01+ 2.4GHz Wireless RF Transceiver Module",
			"steel sheet",
			"iPhone mount",
			"steel pin",
			"plastic pin cap"
		],
		libraries: [
			"SPI.h",
			"Servo.h",
			"printf.h",
			"nRF24L01.h",
			"RF24_config.h",
			"RF24.h"
		]
	},
	{
		id: 2,
		title: 'Buddy (Smart Car)',
		description: 'A car that roams around the house for companionship so people don\'t feel lonely. It roams arount on the floor and calculates it\'s proximety to objects and turns slowly to avoid obstacles and walls. If it gets too close to a wall or object suddenly, it will quickly pull a sharp turn. It\'s cute & fun and has a little personality!',
		dateCreated: '2017/10/14',
		dateCompleted: '2017/11/11',
		imagePath: "assets/ArduinoBuddy/buddy-full-top-IMG_0541.jpeg",
		moreImagesPath: [
			"assets/ArduinoBuddy/buddy-full-top-IMG_0541.jpeg", //0
			"assets/ArduinoBuddy/buddy-full-front-IMG_0542.jpeg", //1
			"assets/ArduinoBuddy/buddy-full-old-IMG_0423.png" //2
		],
		imageCaption: [
			"Beautiful shot of my little Buddy, ready to go!", //0
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
		],
		videoUrl: "https://www.youtube.com/embed/HLsO73FKvso",
		components: [
			"accelerometer",
			"Arduino Nano",
			"battery compartment X8 AA",
			"battery AA",
			"breadboard",
			"car chassis",
			"DC motor",
			"led",
			"power switch",
			"L298 motor driver",
			"popsicle stick",
			"ultrasonic sensor",
			"wheel"
		],
		libraries: [
			"none"
		]
	},
	{
		id: 3,
		title: 'Crunch Counter',
		description: 'Counts crunches while I exercise, so I can watch TV and not have to count. I lose track when I count anyway because I start thinking about other things. It beeps with crunches and displays total on an LCD display. Another actually super useful device. I began with a tilt sensor which ended up being unstable. Then, I tried using an ultrasonic sensor which ended up proving unreliable due to varying object angles for return echos',
		dateCreated: '2018/10/05',
		dateCompleted: '2018/10/029',
		imagePath: "assets/ArduinoCrunchCounter/crunchCounter-final-product-IMG_5563.jpeg",
		moreImagesPath: [
			"assets/ArduinoCrunchCounter/crunchCounter-final-product-IMG_5563.jpeg", //0
			"assets/ArduinoCrunchCounter/crunchCounter-terminal-blocks-IMG_4789.jpeg", //1
			"assets/ArduinoCrunchCounter/crunchCounter-installing-board-into-box-IMG_5110.jpeg", //2
			"assets/ArduinoCrunchCounter/crunchCounter-beta-IMG_4616.jpg", //3
			"assets/ArduinoCrunchCounter/crunchCounter-closeup-bottom-of-board-IMG_5064.jpeg", //4
			"assets/ArduinoCrunchCounter/crunchCounter-completed-board-with-wires-IMG_5066.jpeg", //5
			"assets/ArduinoCrunchCounter/crunchCounter-quadhands-bottom-of-boardIMG_5062.jpeg", //6
			"assets/ArduinoCrunchCounter/crunchCounter-quadhands-solder-station-IMG_5061.jpeg", //7
			"assets/ArduinoCrunchCounter/crunchCounter-box-and-bar-beta-IMG_5132.jpeg" //8
		],
		imageCaption: [
			"Complete", //0
			"Terminal Blocks attached and labeled. Gr for Ground, A0 for analog pin 0 etc.", //1
			"Installing completed board into housing", //2
			"Preliminary photoresistor testing", //3
			"Closeup bottom of board with solder points and connection wires", //4
			"Completed board with wires attached", //5
			"Bottom of board with wires connected to top with housing below", //6
			"Soldering station with the incredible QuadHands solder assistant! If anybody reading this ever solders, please look into these. I cannot recommend them enough.", //7
			"Trial run with completed board installed in box", //8
			"", //9
			"" //10
		],
		videoUrl: "https://www.youtube.com/embed/F4fxYeKbnTA",
		components: [
			"Arduino Nano",
			"button",
			"photoresistor",
			"common cathode RGB led",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module",
			"buzzer",
			"power switch",
			"project box",
			"5 Volt 1 amp power adapter",
			"PCB",
			"Terminal block"
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
		description: "This is a box on my fridge that buzzes and flashes red when it has been open for too long or did not fully close. If the door is closed, the led illuminates blue. If it is open, it is solid red. After 30 seconds, it flashes red and buzzes! This also helps with reminding me not to leave the door open for too long to preserve electricity.\n\nThe reason:\nOne day, I did not realize that the fridge hadn't fully closed. Something was blocking it just a little bit. The next morning, I saw the fridge was open just a little bit. Some food was ruined, so I saw to it that it would never happen again!",
		dateCreated: '2017/10/11',
		dateCompleted: '2017/10/13',
		imagePath: "assets/ArduinoFridgeAlarm/FridgeAlarm-box-IMG_4612.jpg",
		moreImagesPath: [
			"assets/ArduinoFridgeAlarm/FridgeAlarm-box-IMG_4612.jpg", //0
			"assets/ArduinoFridgeAlarm/FridgeAlarm-button-IMG_4614.jpg" //1
		],
		imageCaption: [
			"Simple box on top of the fridge illuminating gentle blue because the door is securly shut", //0
			"Button that gets pushed when the door closes. Tortellini & pickels", //1
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
		videoUrl: "https://www.youtube.com/embed/NcZDf70oZJY",
		components: [
			"Arduino Nano",
			"button",
			"breadboard",
			"common cathode RGB led",
			"buzzer",
			"project box",
			"5 Volt 1 amp power adapter",
			"power port"
		],
		libraries: [
			"none"
		]
	},
	{
		id: 5,
		title: 'Home Box',
		description: "A small box that automatically turns on a light when you walk by. I also programmed the unused buttons on my TV remotes to turn the lights on or off. It has manual on/off buttons as well. The light turns off shortly after it turns on if it detects motion. If you press the on button on the box or on the TV remote, it will stay on longer. If you press the off button on the box or TV remote, it will stay off for a much longer time. You can reset the the time with the stop button.\n\nI have several of these installed in my home with different configurations. For example, a secondary lamp in my living room turns on when I enter my front door but only for a minute. When I manually turn on the main lamp in my living room, it will stay on for several hours. It doesn't have a proximity sensor as I don't always want it on. The bathroom light box is installed inside the ceiling lamp compartment by modifying a light outlet-to-power adapter to feed power to the arduino and let the light bulb screw into it directly. This one is set to stay on for several minutes as not to suddenly make the bathroom pitch black on guests if they're not moving much. The hallway lamp also doesn't have buttons as it is in a bulb adapter on the ceiling. The wall switch can completely turn it off. The bedroom lamp goes off quickly but when manually pressing the power on button, it stays on long enough to read books to the kids.\n\nYou get the gist of it. There are many different configurations, but there is only one sketch (program) written. I simplly uncomment(enable) a line of code for whichever device I am configuring before uploading to the board.",
		dateCreated: '2017/01/01',
		dateCompleted: '2017/12/08',
		imagePath: "assets/ArduinoHomeBox/Homebox-on-couch-IMG_8139.jpeg",
		moreImagesPath: [
			"assets/ArduinoHomeBox/Homebox-on-couch-IMG_8139.jpeg", //0
			"assets/ArduinoHomeBox/Homebox-complete-IMG_8136.png", //1
			"assets/ArduinoHomeBox/HomeBox-breadboardPrep-IMG_1757.jpeg", //2
			"assets/ArduinoHomeBox/Homebox-closeup-solder-IMG_1731.jpeg",  //3
			"assets/ArduinoHomeBox/Homebox-inside-box-big-IMG_1732.jpeg", //4
			"assets/ArduinoHomeBox/Homebox-inside-box-IMG_1492.jpeg", //5
			"assets/ArduinoHomeBox/Homebox-relay-IMG_1441.jpeg", //6
			"assets/ArduinoHomeBox/Homebox-relay-in-box-IMG_1635.jpeg", //7
			"assets/ArduinoHomeBox/Homebox-stuffed-box-IMG_1717.jpeg", //8
			"assets/ArduinoHomeBox/Homebox-workstation-IMG_1730.jpeg", //9
			"assets/ArduinoHomeBox/Homebox-bathroom-danger-wires-IMG_5517.jpeg", //10
			"assets/ArduinoHomeBox/Homebox-bathroom-far-away-IMG_5520.jpeg", //11
			"assets/ArduinoHomeBox/Homebox-bathroom-fixture-IMG_5513.jpeg", //12
			"assets/ArduinoHomeBox/Homebox-bathroom-hanging-IMG_5511.jpeg", //13
			"assets/ArduinoHomeBox/Homebox-bathroom-hanging-pir-IMG_5519.jpeg", //14
			"assets/ArduinoHomeBox/Homebox-bedroom-colseup-IMG_5543.jpeg", //15
			"assets/ArduinoHomeBox/Homebox-bedroom-straight-on-IMG_5544.jpeg", //16
			"assets/ArduinoHomeBox/Homebox-window-closeup-IMG_5542.jpeg", //17
		],
		imageCaption: [
			"Homebox on couch", //0
			"Welcome-home box with separate relay box behind it.", //1
			"Electrical tape holds the wires to the breadboards while the prototype is tested.", //2
			"Soldering 5 ground wires to 1 wire to save space.", //3
			"Installing components into the bedroom's Home Box which includes the relay module.", //4
			"Early beta testing the first prototype.", //5
			"5 Volt relay module (with the red LED on it) which allows cutting of power source.", //6
			"5 Volt relay module connected to an extension cable installed in it's own housing - separate from the Home Box primary unit.", //7
			"Attempted to squeeze everything into one tiny box including the live AC cord. DO NOT DO THIS! It started smoking during mid testing. I abandoned and rebuild from scratch.", //8
			"Installed buttons, power port and IR sensor", //9
			"Modified bulb adapter - very dangerous. I drilled holes in it to feed the wires in and had the wires stick out where the bulb will contact them.", //10
			"Unobtrusive hanging PIR sensor", //11
			"Adapter fixture with 5 Volt relay (blue)", //12
			"Full assembly hanging before instaling cover", //13
			"PIR sensor hangs just below the cover", //14
			"Bedroom Box", //15
			"Cables tucked away", //16
			"Second Living room lamp without PIR which would not be good for it's location" //17
		],
		videoUrl: "https://www.youtube.com/embed/R0kMBlphMrM",
		components: [
			"Arduino Nano",
			"button",
			"breadboard",
			"IR receiver",
			"PIR sensor",
			"5 Volt relay module",
			"5 Volt 1 amp power adapter",
			"project box",
			"lightbulb adapter",
			"power port",
			"PCB"
		],
		libraries: [
			"IRremote.h"
		]
	},
	{
		id: 6,
		title: 'Tank',
		description: "This is a little tank that has had multiple configurations. It was by far the most challenging project I've done because I had to get two Arduinos to communicate. Each had it's own program and Arduino micro controller. It was also made difficult by using low quality products. I ended up having to use an Arduino Mega instead of Nano for the receiver because the Nano was not performing up to my expectations for speed. I had to switch out the 315 Mhz transmitter and receiver with two 2.4Ghz tranceivers because the interferance, stability and range was absolutely terrible. I had to attach capacitors to the tranceivers to increase range.\n\n•Smart Tank: analyzes surroundings by looking around with a servo motor controlling an ultrasonic sensor and chooses where to go.\n•Wired Remote Controlled Tank: remote controlled movement with a cable that runs to a controller.\n•Wireless RF Remote Controlled Tank: uses two arduino boards. One in the controller and one in the tank\n•Grabber Tank: variation on the Wireless RF Remote Controlled Tank that also has a grabber arm to pick up and move objects.",
		dateCreated: '2018/01/07',
		dateCompleted: '2018/01/21',
		imagePath: "assets/ArduinoTank/tank-key-photo-IMG_3017 2.jpeg",
		moreImagesPath: [
			"assets/ArduinoTank/tank-key-photo-IMG_3017 2.jpeg", // 0
			"assets/ArduinoTank/tank-black-and-white-IMG_3069.jpeg", // 1
			"assets/ArduinoTank/tank-grabber-IMG_3061.jpeg", // 2
			"assets/ArduinoTank/tank-with-grabber-on-floor-IMG_3241.jpeg", // 3
			"assets/ArduinoTank/tank-battery-compartments-IMG_3472.jpeg", // 4
			"assets/ArduinoTank/tank-remote-final-iteration-IMG_8114.jpeg", //5
			"assets/ArduinoTank/tank-remote-IMG_3489.jpeg", // 6
			"assets/ArduinoTank/tank-wired-remote-IMG_3076.jpeg", // 7
			"assets/ArduinoTank/tank-remote-board-installation-IMG_3319.jpeg", // 8
			"assets/ArduinoTank/tank-remote-board-with-wires-IMG_3305.jpeg", // 9
			"assets/ArduinoTank/tank-remote-open-IMG_3482.jpeg", // 10
			"assets/ArduinoTank/tank-remote-solder-board-IMG_3299.jpeg", // 11
			"assets/ArduinoTank/tank-remote-solder-station-IMG_3300.jpeg", // 12
			"assets/ArduinoTank/tank-smart-on-mat-IMG_3032.jpeg", // 13
			"assets/ArduinoTank/tank-chassis-IMG_3007.jpeg" // 14
		],
		imageCaption: [
			"Beautiful shot of my smart tank!", //0
			"This thing takes great photos", //1
			"Grabber installed", //2
			"Beta testing", //3
			"I had to wire up 4 batteries out of 6 in one compartment for the Arduino and the other 2 connected to the second bank", //4
			"Final iteration of remote after switching to wireless tranceiver.", //5
			"Completed first iteration of wireless remote using a transmitter.", //6
			"Wired remote used whilst testing tank movement before creating the wireless remote which was the most difficult project I've done with Arduino.", //7
			"Installing board into remote.", //8
			"Bottom of the completed board for the remote. After this board, I started using terminal blocks which allow solderless connections because soldering a wire directly to a board makes it very sensitive to movement.", //9
			"Doesn't fit when including the battery! I had to enlarge the enclosure for the final remote.", //10
			"I've become fairly skilled with soldering tiny pins. This is the Arduino Nano on the back of the board. To put it in perspective, the whole board is slightly larger than a 9V battery.", //11
			"Soldering Station. After this project, I invested in a QuadHands Helper to replace the helping hands device which holds the board and wires in place. You can see the QuadHands in the Crunch Counter project.", //12
			"First iteration complete!", //13
			"Chassis I build with pieces kind of like Legos but for robotics." //14
		],
		videoUrl: "coming soon",
		components: [
			"Arduino Nano",
			"Arduino Mega",
			"10 µF capacitor",
			"breadboard",
			"DC motor",
			"button",
			"battery compartment X8 AA",
			"battery compartment X4 AA",
			"battery AA",
			"battery 9V",
			"common cathode RGB led",
			"grabber",
			"servo motor",
			"wheel",
			"treads",
			"triangle vehicle chassis",
			"potentiometer",
			"ultrasonic sensor",
			"NRF24L01+ 2.4GHz Wireless RF Transceiver Module",
			"XY-MK-5V 315Mhz RF receiver",
			"XY-FST 315Mhz RF transmitter"
		],
		libraries: [
			"SPI.h",
			"RH_ASK.h",
			"Servo.h",
			"printf.h",
			"nRF24L01.h",
			"RF24_config.h",
			"RF24.h"
		]
	},
	{
		id: 7,
		title: 'Security System',
		description: "This is a home security system which fends off intruders. Normally, the LED slowly cycles green and blue. When a potential intruder is detected, it flashes bright red quickly until verifying the situation is safe.\n\nDetails:\nEssentially, a passive infrared sensor detects movement outside the door and flashes a red LED. I believe that this is enough to fend off intruders. If I were theoretically going to rob somebody and saw an LED start flashing red as I approached, I'd certainly flee the scene. Especially if it seems to be a home made security system. Who knows what kind of booby traps I could have laid out for them!",
		dateCreated: '2018/07/01',
		dateCompleted: '2018/07/02',
		imagePath: "assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg",
		moreImagesPath: [
			"assets/ArduinoSecuritySystem/SecuritySystem-inside-IMG_4506.jpeg", //0
			"assets/ArduinoSecuritySystem/SecuritySystem-outside-IMG_4508.jpeg" ///1
		],
		imageCaption: [
			"Inside view of setup", //0
			"The passive infrared sensor on the right sticks out just outside of the storm door. The cables come from over the door from the left.", //1
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
		videoUrl: "https://www.youtube.com/embed/NbznV_-Ivl8",
		components: [
			"5 Volt 1 amp power adapter",
			"Arduino Nano",
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
		description: "I Modified a space heater to be able to power on after a given time. You can set a timer for the heater to power on. I use it for the morning so that I can get out of bed more easily in the winter. I Connected 4 wires to the heater's circuit board for the control panel. 2 wires to Power button on heater, 2 wires to Oscillation control button on heater. I fed them out through a hole I drilled.\n\nDetails:\nPress the button to add one hour to the timer. If you press it again, it will add another hour. Adding does not restart the timer. It starts when you press the button the first time and the first led turns illuminates. The LED indicators will illuminate based on how much time is left until the unit powers on. Manually power it on by holding the button down. Automatically powers off after two hours for safety. While on, press the button to turn it off manually and force it into safety mode. Press and hold when it's in safety mode until you see a bright blue light to bring it back to regular mode.",
		dateCreated: '2017/12/09',
		dateCompleted: '2017/12/28',
		imagePath: "assets/ArduinoHeaterControl/ArduinoHeaterControl-box-attached-closeup-IMG_5549.jpeg",
		moreImagesPath: [
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-box-attached-closeup-IMG_5549.jpeg", //0
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
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-CablesSolderedToController2 - IMG_1753 copy.jpeg", //13
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-wide-angle-IMG_5551.jpeg", //14
			"assets/ArduinoHeaterControl/ArduinoHeaterControl-BoardAndCables1%20-%20IMG_2368%20copy.jpeg" //15
		],
		imageCaption: [
			"Completed Box attached to space heater", //0
			"Bottom of the circuit board I made for condensing the wiring.", //1
			"By condensing the electronics by creating this board, it will allow me to fit all of the components into the tiny project-box/housing.", //2
			"Top view of the board (This is very cool).", //3
			"Top view of the board whilst connected to the wires.", //4
			"Board is ready to be inserted into the housing.", //5
			"Beautiful shot of the board with test LEDs", //6
			"Side shot of the board with test LEDs to show board's thickness", //7
			"Jumper wires soldered to the existing space heater's controller board", //8
			"Wires are fed through a hole I drilled to connect to the arduino externally", //9
			"Wires connected to the existing controller board coming out of the side of the unit", //10
			"Wires sticking out where the box will be mounted", //11
			"Glued the soldered wires down to prevent flexing the sensitive solder joints", //12
			"The controller panel is ready to be reinstalled.", //13
			"Space heater with Heater Control box", //14
			"Board connected to the wires; ready to be installed in the housing" //15
		],
		videoUrl: "https://www.youtube.com/embed/HvHQfiEPeb8",
		components: [
			"5 Volt 1 amp power adapter",
			"Arduino Nano",
			"led",
			"IC 4066 quad bilateral switch",
			"button",
			"project box",
			"space heater",
			"PCB"
		],
		libraries: [
			"none"
		]
	},
	{
		id: 9,
		title: 'Temperature Alarm',
		description: "A box that has an alarm for when the temperature drops below a predetermined temperature. The temperature sensor is on a long wire so that it may reach around to the next room. I created this so that I could monitor the temperature in the nursery when my second son, Gabriel was a newborn. The sensor was set in the baby's room by the crib to alert us when the temperature is too cold for the newborn.",
		dateCreated: '2017/03/01',
		dateCompleted: '2017/03/13',
		imagePath: "assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg",
		moreImagesPath: [
			"assets/ArduinoTemperatureAlarm/TemperatureAlarm-Full-IMG_7909.jpeg", //0
			"assets/ArduinoTemperatureAlarm/temperature-alarm-pano-IMG_7720.png", //1
			"assets/ArduinoTemperatureAlarm/temperature-alarm-workspace-MG_7652.png" //2
		],
		imageCaption: [
			"Box with coiled up extension and sensor", //0
			"Soldering wires directly to the board. Not ideal, but I did not have access to small enough terminal blocks.", //1
			"Solder station during early beta testing", //2
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
		videoUrl: "https://www.youtube.com/embed/iLcNTzUM5V4",
		components: [
			"Arduino Uno",
			"button",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module",
			"PCB"
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
		description: '50 Gram scale using a .001 accuracy load cell. Includes a tare feature. Perfect for measuring chemicals for science experiments with the kids.',
		dateCreated: '2018/04/27',
		dateCompleted: '2018/04/30',
		imagePath: "assets/ArduinoScale/scale-dimes-IMG_5594.jpeg",
		moreImagesPath: [
			"assets/ArduinoScale/scale-dimes-IMG_5594.jpeg", // 0
			"assets/ArduinoScale/scale-50-grams-IMG_9161.jpeg", // 1
			"assets/ArduinoScale/scale-too-heavy-IMG_5643.jpeg", // 2
			"assets/ArduinoScale/scale-inside-box-IMG_5590.jpeg", // 3
			"assets/ArduinoScale/scale-beta-testing-IMG_9090.jpeg", // 4
			"assets/ArduinoScale/scale-fragile-taped-IMG_9075.jpeg" // 5
		],
		imageCaption: [
			"Measuring dimes without using the tare function (included weight of tray)", //0
			"Calibration with 50 gram weight", //1
			"Too heavy function. Above 50 grams, the readings will be unreliable with this load cell.", //2
			"Awesome internal view after installation is complete", //3
			"Alpha testing", //4
			"Sensitive wires taped down during modular construction", //5
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
		videoUrl: "https://www.youtube.com/embed/QkKUQQRAAVE",
		components: [
			"Arduino Nano",
			"button",
			"HX711 Load Cell Amplifier",
			"load cell",
			"IIC/I2C/TWI 1602 Serial LCD Display",
			"IIC/I2C/TWI 1602 Serial Interface module",
			"PCB",
			"power switch",
			"terminal block"
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
