import { Injectable } from '@angular/core';
import { PhotographyModel } from './photography-model';
import { Photographs } from './photographs';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

	getPhotos(): Observable<PhotographyModel[]>{
		return of(Photographs);
	}
	getPhoto(id: number): Observable<PhotographyModel>{
		return of(Photographs.find(photo => photo.id === id));
	}
}
