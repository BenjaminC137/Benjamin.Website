import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArduinoService } from '../arduino.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ArduinoProjects } from '../arduino-projects';

@Component({
  selector: 'app-arduino-detail',
  templateUrl: './arduino-detail.component.html',
  styleUrls: ['./arduino-detail.component.css']
})

export class ArduinoDetailComponent implements OnInit {
//	@Input() arduino: ArduinoProjectModel;
	arduino: ArduinoProjectModel;
	goPlay: string;
	trustedDashboardUrl : SafeUrl;
//	currentImage = 0;
  constructor(
	  private route: ActivatedRoute,
	  private arduinoService: ArduinoService,
	  private location: Location,
	  private sanitizer: DomSanitizer
  	  ) {
//	  		this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lyI5C47GDH0");
		  this.trustedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/lyI5C47GDH0");
	    }

  ngOnInit(): void {
	  this.getArduino();
	  this.goPlay = this.arduino.videoUrl;

  }
	getArduino(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.arduinoService.getArduino(id).subscribe(arduino => this.arduino = arduino);
	}
	goBack(): void{
		this.location.back();
	}
}
