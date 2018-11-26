import { Component, OnInit } from '@angular/core';
import { PhotographyModel } from '../photography-model';
//import { Photographs } from '../photographs';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
	photographs: PhotographyModel[];

  constructor(private photoService: PhotoService) { }

  ngOnInit() {
	  this.getPhotos();
  }
getPhotos(): void {
  this.photoService.getPhotos()
      .subscribe(photographs => this.photographs = photographs);
}
}
