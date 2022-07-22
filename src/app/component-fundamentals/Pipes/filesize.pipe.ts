import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FilesizePipe implements PipeTransform {

  // transform(value: any, ...args: unknown[]): unknown {
  // return null;

  //   transform(size: any, extension: string = 'MB'): string {
  //     return (size / (1024 * 1024)).toFixed(0) + extension;
  // }
  transform(value: any) {
    return (value * 79.90).toFixed(2) + '$';
  }
// transform(value: any, ...args: any[]) {
// return value
// }
}
