import { Component, OnInit, HostListener } from '@angular/core';
import { PhotographyModel } from '../photography-model';
//import { Photographs } from '../photographs';
import { PhotoService } from '../photo.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
	photographs: PhotographyModel[];
	zoomState:boolean = false;
	selectedIdx: number = null;
	show: boolean = false;
  constructor(
	private photoService: PhotoService,
	private route: ActivatedRoute,
	private location: Location
	) { }

  ngOnInit() {
	  this.getPhotos();
  }
getPhotos(): void {
  this.photoService.getPhotos()
      .subscribe(photographs => this.photographs = photographs);
}
	ViewHiRes(index: number){
		if(this.show == true){
		this.show = !this.show
		this.selectedIdx = null;
//				console.log(this.photographs[0].date);
		}
		else if (this.show == false){
		this.selectedIdx = index;
		console.log(index);
		this.show = !this.show
		}
	}
}
