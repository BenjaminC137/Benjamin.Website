import { Component, OnInit, Input } from '@angular/core';
import { ArduinoProjectModel } from '../arduino-project-model';

@Component({
  selector: 'app-arduino-detail',
  templateUrl: './arduino-detail.component.html',
  styleUrls: ['./arduino-detail.component.css']
})
export class ArduinoDetailComponent implements OnInit {
	@Input() arduino: ArduinoProjectModel;

  constructor() { }

  ngOnInit() {
  }

}
