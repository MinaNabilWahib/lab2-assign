import { Pipe, PipeTransform } from '@angular/core';
import { Speaker } from './_models/Speaker';

@Pipe({
  name: 'arraySplice',
  pure: false,
})
export class ArraySplicePipe implements PipeTransform {
  transform(value: Array<Speaker>, sFilter: string): Array<Speaker> {
    return value.filter((speaker) => speaker.name.includes(sFilter));
  }
}
