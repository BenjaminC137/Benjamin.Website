import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, NgModule, HostListener } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArduinoService } from '../arduino.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ArduinoProjects } from '../arduino-projects';

@NgModule({
//  declarations: [SomeComponent, SomeDirective, SomePipe],
//  providers: [arduinoService],
//  exports: [CommonModule],
//  imports: [CommonModule]
})

@Component({
  selector: 'app-arduino-detail',
  templateUrl: './arduino-detail.component.html',
  styleUrls: ['./arduino-detail.component.css']
})

export class ArduinoDetailComponent implements OnInit{
	@HostListener('document:keydown', ['$event'])
	 handleKeyboardEvent(event: KeyboardEvent) {
		this.key = event.key;
		if(this.key === 'ArrowRight'){
			if(this.selectedIdx < (this.arduino.moreImagesPath.length - 1)){
			this.selectedIdx ++;
			}
//			console.log("right");
		}
		if(this.key === 'ArrowLeft'){
			if(this.selectedIdx >0){
			this.selectedIdx --;
			}
//			console.log("left");
		}
		if(this.key === 'Escape'){
			this.show = !this.show
			this.selectedIdx = null;
//			console.log("escape");
		}
  }
	arduino: ArduinoProjectModel;
	goPlay: string;
	trustedDashboardUrl : SafeUrl;
	zoomState:boolean = false;
	selectedIdx: number = null;
	show: boolean = false;
	key: string;
	dateComplete: Date;
	duration: number;


//	dateCompletes: Date = Date.now();
//    today: number = Date.now();

//	dateCompletedFormatted = new Date(this.arduino.dateCompleted);
//	dateCreatedFormatted = new Date(this.arduino.dateCreated);

//	dateComplete = new Date(Date.parse(this.arduino.dateCompleted));


//	duration = dateCompletedFormatted - dateCreatedFormatted;
//	console.log(this.dateComplete);

//	this.duration = this.arduino.dateCompleted - this.arduino.dateCreated


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
//	  this.selectedIdx = 0;
  }
	getArduino(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.arduinoService.getArduino(id).subscribe(arduino => this.arduino = arduino);
	}
	goBack(): void{
		this.location.back();
	}
//	 ngAfterViewInit() {
//      console.log(this.myId.nativeElement);
//		this.selectedIdx: int = 0;
	scroll(el) {
		el.scrollIntoView();
	}
	ViewHiRes(index: number){
		console.log("immediate: ", index);
		if(this.show == true){
		this.show = !this.show
		this.selectedIdx = null;
//		console.log(this.arduino.dateCompleted);
//		console.log('show == true');
		}
		else if (this.show == false){
			this.selectedIdx = index;
//			console.log("index: ", index);
			this.show = !this.show
//			console.log('show == false');
		}
//			this.zoomState[i] = !this.zoomState[i];
//			if(this.zoom == false){
//				this.i.zoomState = "img-scale";
//			}
//			else{
//				this.i.zoomState = "view-hi-res"
//			}
	}

	NavigateImage(a) {
//		console.log("got to NavigateImage: ", a, " | ", this.selectedIdx);
		var arrow = a;
		if(arrow == 'right'){
			if(this.selectedIdx < (this.arduino.moreImagesPath.length - 1)){
			this.selectedIdx ++;
			}
//			console.log("right");
		}
		if(arrow == 'left'){
			if(this.selectedIdx >0){
			this.selectedIdx --;
			}
//			console.log("left");
		}
		this.show = !this.show;
		console.log("Idx after navImg: ", this.selectedIdx);
		this.ViewHiRes(this.selectedIdx);
  }
//    }

}
