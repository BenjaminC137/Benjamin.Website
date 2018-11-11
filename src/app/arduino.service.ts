import { Injectable } from '@angular/core';
import { ArduinoProjectModel } from './arduino-project-model';
import { ArduinoProjects } from './arduino-projects';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ArduinoService {
//	searchText: string;
//	filterargs = {title: this.searchText};

    constructor() { }

//	getArduinoProjects(): ArduinoProjectModel[]{
//	return ArduinoProjects;
//	}

	getArduinoProjects(): Observable<ArduinoProjectModel[]>{
		return of(ArduinoProjects);
	}
	getArduino(id: number): Observable<ArduinoProjectModel>{
		return of(ArduinoProjects.find(arduino => arduino.id === id));
	}

}
