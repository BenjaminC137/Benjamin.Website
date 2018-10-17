import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoDetailComponent } from './arduino-detail.component';

describe('ArduinoDetailComponent', () => {
  let component: ArduinoDetailComponent;
  let fixture: ComponentFixture<ArduinoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
