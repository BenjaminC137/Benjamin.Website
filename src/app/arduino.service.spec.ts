import { TestBed, inject } from '@angular/core/testing';

import { ArduinoService } from './arduino.service';

describe('ArduinoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArduinoService]
    });
  });

  it('should be created', inject([ArduinoService], (service: ArduinoService) => {
    expect(service).toBeTruthy();
  }));
});
