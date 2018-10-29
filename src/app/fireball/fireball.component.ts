import { Component, OnInit, NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@NgModule({
	schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})

@Component({
  selector: 'app-fireball',
  templateUrl: './fireball.component.html',
  styleUrls: ['./fireball.component.css']
})
export class FireballComponent implements OnInit {
  title = 'fireball';

  constructor(
	  private route: ActivatedRoute,
	  private location: Location
	  ) { }

  ngOnInit() {
  }
	goBack(): void{
		this.location.back();
	}

}
