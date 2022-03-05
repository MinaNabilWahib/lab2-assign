import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: Date): string {
    return value
      .toLocaleDateString()
      .replace('/', '-')
      .split('-')
      .reverse()
      .join('-');
  }
}
