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
	@Input() arduino: ArduinoProjectModel;

  constructor(
	  private route: ActivatedRoute,
	  private heroService: ArduinoService,
	  private location: Location
  ) { }

  ngOnInit(): void {
	  this.getArduinoProjects();
  }
	getArduinoProjects(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.arduinoService.getArduinoProjects(id).subscribe(arduinoProject => this.arduinoProject = arduinoProject);
	}
}
