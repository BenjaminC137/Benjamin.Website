import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, NgModule } from '@angular/core';
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
// @ViewChild('i') i: ElementRef;
//	@Input() arduino: ArduinoProjectModel;
//	@Input() show: boolean;

	arduino: ArduinoProjectModel;
//	selectedIdx: number;
	goPlay: string;
	trustedDashboardUrl : SafeUrl;
	zoomState:boolean = false;
	selectedIdx: number = null;
	 show: boolean = false;

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

	ViewHiRes(index: number){
		if(this.show == true){
		this.show = !this.show
		this.selectedIdx = null;
		}
		else if (this.show == false){
		this.selectedIdx = index;
		console.log(index);
		this.show = !this.show
		}
//			this.zoomState[i] = !this.zoomState[i];
//			if(this.zoom == false){
//				this.i.zoomState = "img-scale";
//			}
//			else{
//				this.i.zoomState = "view-hi-res"
//			}
	}
//    }

}
