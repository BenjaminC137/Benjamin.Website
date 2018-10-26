import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArduinoService } from '../arduino.service';



@Component({
  selector: 'app-arduino-detail',
  templateUrl: './arduino-detail.component.html',
  styleUrls: ['./arduino-detail.component.css']
})


export class ArduinoDetailComponent implements OnInit {
//	@Input() arduino: ArduinoProjectModel;
	arduino: ArduinoProjectModel;
//	currentImage = 0;

  constructor(
	  private route: ActivatedRoute,
	  private arduinoService: ArduinoService,
	  private location: Location
  ) { }

  ngOnInit(): void {
	  this.getArduino();
  }
	getArduino(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.arduinoService.getArduino(id).subscribe(arduino => this.arduino = arduino);
	}
	goBack(): void{
		this.location.back();
	}
}
