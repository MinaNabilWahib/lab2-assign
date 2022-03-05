import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerTo2',
})
export class PowerTo2Pipe implements PipeTransform {
  transform(value: number, x: number = 2): unknown {
    return Math.pow(value, 2);
  }
}
