import { Pipe, PipeTransform } from '@angular/core';
import { ArduinoService } from './arduino.service';
import { ArduinoProjectModel } from './arduino-project-model';
import { Observable } from "rxjs";

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
//  transform(value: any, args?: any): any {
       transform(ArduinoProjects: any[], filter): any {
        if (!ArduinoProjects || !filter) {
            return ArduinoProjects;
        }
//		   if(!searchText){
//			   return ArduinoProjects;
//		   }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return ArduinoProjects.filter(ArduinoProjects => ArduinoProjects.title.indexOf(filter.title) !== -1);
  }
}
