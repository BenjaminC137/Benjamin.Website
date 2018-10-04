import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArduinoComponent } from './arduino.component';

describe('ArduinoComponent', () => {
  let component: ArduinoComponent;
  let fixture: ComponentFixture<ArduinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArduinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArduinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
